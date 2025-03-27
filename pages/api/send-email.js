import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, service, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Use environment variable
                pass: process.env.GMAIL_PASS, // Use environment variable
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER, // Use environment variable
            subject: `New Message from ${name} - ${service}`,
            text: `
                Name: ${name}
                Email: ${email}
                Service: ${service}
                Message: ${message}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
