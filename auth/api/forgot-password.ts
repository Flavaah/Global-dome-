import { auth } from '../config';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { email } = req.body;
  // TODO: Generate reset token, send email to email (must be @globaldome.com)
  res.status(200).json({ message: 'Password reset email sent to ' + email });
}
