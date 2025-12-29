import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Debug: Check if API key is loaded
const apiKey = process.env.RESEND_API_KEY;
console.log('RESEND_API_KEY exists:', !!apiKey);
console.log('RESEND_API_KEY length:', apiKey?.length || 0);

if (!apiKey) {
  console.error('ERROR: RESEND_API_KEY is not set in environment variables!');
}

const resend = new Resend(apiKey);

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You'll update this with your domain
      to: ['evansodiaka@gmail.com'], // Your email
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}

