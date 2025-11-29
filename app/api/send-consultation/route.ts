import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'
import { broadcastConsultation } from '../consultations-stream/route'

// Validate environment variables
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

// Create transporter with env validation
let transporter: nodemailer.Transporter | null = null

const getTransporter = () => {
    if (!transporter) {
        const { EMAIL_USER, EMAIL_PASSWORD } = validateEnv()

        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASSWORD,
            },
        })
    }
    return transporter
}

export async function POST(request: NextRequest) {
    try {
        const { name, email, company, service, message } = await request.json()

        // Validate required fields
        if (!name || !email || !service || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, service, and message are required' },
                { status: 400 }
            )
        }

        // Get env variables
        const { EMAIL_USER, ADMIN_EMAIL } = validateEnv()

        // Email to admin
        const adminMailOptions = {
            from: EMAIL_USER,
            to: ADMIN_EMAIL,
            subject: `New Consultation Request from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">New Consultation Request</h2>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0891b2;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: white; padding: 10px; border-radius: 4px;">${message.replace(/\n/g, '<br>')}</p>
              <p style="font-size: 12px; color: #666; margin-top: 15px;">
                Submitted at: ${new Date().toLocaleString()}
              </p>
            </div>
            
            <p style="color: #666; font-size: 12px;">
              This is an automated message. Please reply to ${email} to continue the consultation.
            </p>
          </div>
        </div>
      `,
        }

        // Email to user (confirmation)
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
              Thank you for reaching out to TryQu Tech. We have received your consultation request and appreciate your interest in our services.
            </p>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #0891b2;">
              <p><strong>Service of Interest:</strong> ${service}</p>
              <p style="color: #666; font-size: 14px;">
                Our expert team will review your request and contact you within 24-48 hours to discuss your project in detail.
              </p>
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f9fafb; border-radius: 4px;">
              <h3 style="color: #333; margin-top: 0;">Quick Contact Options:</h3>
              <p style="color: #666;">
                📞 Call us:  9033452895<br>
                📧 Email us: tryqutech@gmail.com<br>
                💬 Live chat: Available 24/7
              </p>
            </div>
            
            <p style="color: #999; font-size: 12px; border-top: 1px solid #eee; padding-top: 10px;">
              TryQu Tech - Enterprise Digital Solutions
            </p>
          </div>
        </div>
      `,
        }

        // Get transporter and send both emails
        const mailer = getTransporter()

        await Promise.all([
            mailer.sendMail(adminMailOptions),
            mailer.sendMail(userMailOptions),
        ])

        // Broadcast to real-time subscribers (admin dashboard, etc.)
        broadcastConsultation({
            type: 'new_consultation',
            data: {
                name,
                email,
                company,
                service,
                timestamp: new Date().toISOString(),
            },
        })

        return NextResponse.json(
            {
                success: true,
                message: 'Consultation request submitted successfully',
                data: { name, email, company, service },
            },
            { status: 200 }
        )
    } catch (error) {
        const isConfigError = error instanceof Error && error.name === 'ConfigError'
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'

        // Detect specific error types
        const isAuthError = errorMessage.includes('535') || errorMessage.includes('BadCredentials') || errorMessage.includes('Invalid login')
        const isNetworkError = errorMessage.includes('ECONNREFUSED') || errorMessage.includes('getaddrinfo')

        let logLevel = 'error'
        let errorType = 'Runtime'

        if (isConfigError) {
            errorType = 'Configuration'
            logLevel = 'warn'
        } else if (isAuthError) {
            errorType = 'Authentication'
        } else if (isNetworkError) {
            errorType = 'Network'
        }

        console.error('[Consultation API Error]', {
            type: errorType,
            message: errorMessage,
            timestamp: new Date().toISOString(),
            ...(process.env.NODE_ENV === 'development' && { stack: error instanceof Error ? error.stack : undefined }),
        })

        // Return different status codes and messages based on error type
        let statusCode = 500
        let userMessage = 'Failed to send consultation request. Please try again later or contact us directly.'

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
