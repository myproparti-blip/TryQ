import { NextRequest, NextResponse } from 'next/server'

// Optional: Use Resend for better Next.js integration
// npm install resend
// import { Resend } from 'resend'
// const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare email content
    const adminContent = `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    <p><strong>Service:</strong> ${service}</p>
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
    `

    const userContent = `
    <h2>Consultation Request Received</h2>
    <p>Hi ${name},</p>
    <p>Thank you for reaching out to TryQu Tech. We have received your consultation request.</p>
    <p><strong>Service of Interest:</strong> ${service}</p>
    <p>Our team will contact you within 24-48 hours.</p>
    <p>Best regards,<br>TryQu Tech Team</p>
    `

    // Using Resend (if installed)
    // const response = await resend.emails.send({
    //   from: 'noreply@tryqtech.com',
    //   to: email,
    //   subject: 'Consultation Request Received',
    //   html: userContent,
    // })

    // Using Nodemailer (default)
    // Import from your configured transporter
    const response = await fetch('http://localhost:3000/api/send-consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, service, message }),
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
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send consultation request' },
      { status: 500 }
    )
  }
}
