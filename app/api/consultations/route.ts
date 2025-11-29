import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'
import { broadcastConsultation } from '../consultations-realtime/route'

// Store consultations in memory (replace with database in production)
let consultations: Array<{
    id: string
    name: string
    email: string
    company: string
    service: string
    message: string
    timestamp: string
    status: 'pending' | 'contacted' | 'scheduled' | 'completed'
}> = []

const validateEnv = () => {
    const { EMAIL_USER, EMAIL_PASSWORD, ADMIN_EMAIL } = process.env
    const missing: string[] = []

    if (!EMAIL_USER) missing.push('EMAIL_USER')
    if (!EMAIL_PASSWORD) missing.push('EMAIL_PASSWORD')
    if (!ADMIN_EMAIL) missing.push('ADMIN_EMAIL')

    if (missing.length > 0) {
        const error = new Error(
            `Missing required environment variables: ${missing.join(', ')}. ` +
            `Please add them to your .env.local file.\n` +
            `Example:\n` +
            `EMAIL_USER=your-email@gmail.com\n` +
            `EMAIL_PASSWORD=your-app-password\n` +
            `ADMIN_EMAIL=admin@tryqtech.com`
        )
        error.name = 'ConfigError'
        throw error
    }

    return { EMAIL_USER, EMAIL_PASSWORD, ADMIN_EMAIL }
}

let transporter: nodemailer.Transporter | null = null

const getTransporter = () => {
    if (!transporter) {
        const { EMAIL_USER, EMAIL_PASSWORD } = validateEnv()
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: EMAIL_USER, pass: EMAIL_PASSWORD },
        })
    }
    return transporter
}

// GET - Retrieve all consultations
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const status = searchParams.get('status')
        const email = searchParams.get('email')

        let filtered = consultations

        if (status) {
            filtered = filtered.filter(c => c.status === status)
        }

        if (email) {
            filtered = filtered.filter(c => c.email.toLowerCase().includes(email.toLowerCase()))
        }

        return NextResponse.json({
            success: true,
            count: filtered.length,
            data: filtered.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()),
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        return NextResponse.json({ error: errorMessage }, { status: 500 })
    }
}

// POST - Create new consultation
export async function POST(request: NextRequest) {
    try {
        const { name, email, company, service, message } = await request.json()

        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, service, and message are required' },
                { status: 400 }
            )
        }

        const { EMAIL_USER, ADMIN_EMAIL } = validateEnv()
        const consultationId = `CONS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        const timestamp = new Date().toISOString()

        // Admin email
        const adminMailOptions = {
            from: EMAIL_USER,
            to: ADMIN_EMAIL,
            subject: `New Consultation Request from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">New Consultation Request</h2>
            <p style="color: #666; font-size: 12px; margin: 10px 0;"><strong>ID:</strong> ${consultationId}</p>
            <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0891b2;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: white; padding: 10px; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</p>
              <p style="font-size: 12px; color: #666; margin-top: 15px;">
                Submitted at: ${new Date(timestamp).toLocaleString()}
              </p>
            </div>
            <p style="color: #666; font-size: 12px;">
              Reply to ${email} to continue the consultation.
            </p>
          </div>
        </div>
      `,
        }

        // User confirmation email
        const userMailOptions = {
            from: EMAIL_USER,
            to: email,
            subject: 'Consultation Request Received - TryQu Tech',
            html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">Thank You for Your Interest!</h2>
            <p style="color: #666; line-height: 1.6;">
              Hi ${name},<br><br>
              Thank you for reaching out to TryQu Tech. We have received your consultation request.
            </p>
            <div style="margin: 20px 0; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #0891b2;">
              <p><strong>Reference ID:</strong> ${consultationId}</p>
              <p><strong>Service of Interest:</strong> ${service}</p>
              <p style="color: #666; font-size: 14px;">
                Our expert team will review your request and contact you within 24-48 hours.
              </p>
            </div>
            <p style="color: #999; font-size: 12px;">TryQu Tech - Enterprise Digital Solutions</p>
          </div>
        </div>
      `,
        }

        const mailer = getTransporter()
        await Promise.all([
            mailer.sendMail(adminMailOptions),
            mailer.sendMail(userMailOptions),
        ])

        // Store consultation
        const newConsultation = {
            id: consultationId,
            name,
            email,
            company,
            service,
            message,
            timestamp,
            status: 'pending' as const,
        }

        consultations.push(newConsultation)

        // Broadcast real-time update
        broadcastConsultation({
            type: 'new_consultation',
            data: newConsultation,
        })

        return NextResponse.json(
            {
                success: true,
                message: 'Consultation request submitted successfully',
                consultationId,
                data: newConsultation,
            },
            { status: 200 }
        )
    } catch (error) {
        const isConfigError = error instanceof Error && error.name === 'ConfigError'
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'

        // Detect specific error types
        const isAuthError = errorMessage.includes('535') || errorMessage.includes('BadCredentials') || errorMessage.includes('Invalid login')
        const isNetworkError = errorMessage.includes('ECONNREFUSED') || errorMessage.includes('getaddrinfo')

        let errorType = 'Runtime'

        if (isConfigError) {
            errorType = 'Configuration'
        } else if (isAuthError) {
            errorType = 'Authentication'
        } else if (isNetworkError) {
            errorType = 'Network'
        }

        console.error('[Consultation POST API Error]', {
            type: errorType,
            message: errorMessage,
            timestamp: new Date().toISOString(),
            ...(process.env.NODE_ENV === 'development' && { stack: error instanceof Error ? error.stack : undefined }),
        })

        // Return different status codes and messages based on error type
        let statusCode = 500
        let userMessage = 'Failed to process consultation request. Please try again later.'

        if (isConfigError) {
            statusCode = 503
            userMessage = 'Email service is not currently configured. Please contact support.'
        } else if (isAuthError) {
            statusCode = 503
            userMessage = 'Email service authentication failed. Please contact support or try calling us at 903-345-2895.'
        } else if (isNetworkError) {
            statusCode = 502
            userMessage = 'Email service temporarily unavailable. Please try again in a moment.'
        }

        return NextResponse.json(
            {
                error: userMessage,
                ...(process.env.NODE_ENV === 'development' && { details: errorMessage, type: errorType }),
            },
            { status: statusCode }
        )
    }
}
