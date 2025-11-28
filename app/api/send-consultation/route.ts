import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'
import { broadcastConsultation } from '../consultations-stream/route'

// Validate environment variables
const validateEnv = () => {
    const { EMAIL_USER, EMAIL_PASSWORD, ADMIN_EMAIL } = process.env

    if (!EMAIL_USER || !EMAIL_PASSWORD || !ADMIN_EMAIL) {
        const missing = []
        if (!EMAIL_USER) missing.push('EMAIL_USER')
        if (!EMAIL_PASSWORD) missing.push('EMAIL_PASSWORD')
        if (!ADMIN_EMAIL) missing.push('ADMIN_EMAIL')

        throw new Error(
            `Missing environment variables: ${missing.join(', ')}. Check .env.local file.`
        )
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
            subject: 'Consultation Request Received - TryQ Tech',
            html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">Thank You for Your Interest!</h2>
            
            <p style="color: #666; line-height: 1.6;">
              Hi ${name},<br><br>
              Thank you for reaching out to TryQ Tech. We have received your consultation request and appreciate your interest in our services.
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
                📞 Call us: +1 (800) TRYQ-TECH<br>
                📧 Email us: trqtech@gmail.com<br>
                💬 Live chat: Available 24/7
              </p>
            </div>
            
            <p style="color: #999; font-size: 12px; border-top: 1px solid #eee; padding-top: 10px;">
              TryQ Tech - Enterprise Digital Solutions
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
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        console.error('Consultation API Error:', {
            error: errorMessage,
            timestamp: new Date().toISOString(),
            env: {
                EMAIL_USER: process.env.EMAIL_USER ? 'SET' : 'MISSING',
                EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? 'SET' : 'MISSING',
                ADMIN_EMAIL: process.env.ADMIN_EMAIL ? 'SET' : 'MISSING',
            },
        })

        return NextResponse.json(
            {
                error: errorMessage.includes('Missing environment')
                    ? errorMessage
                    : 'Failed to send consultation request. Check server logs.'
            },
            { status: 500 }
        )
    }
}
