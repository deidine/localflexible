import * as sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const { text, images } = JSON.parse(req.body);

    const msg = {
      to: 'recipient@example.com', // Change to your recipient
      from: 'sender@example.com', // Change to your verified sender
      subject: 'New Message from Contact Form',
      text: text,
      html: `<strong>${text}</strong><br/><br/>Attached images:<br/>${images.map((img: string) => `<img src="${img}" alt="Image" />`).join('<br/>')}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
