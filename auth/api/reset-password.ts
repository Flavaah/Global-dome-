import { auth } from '../config';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { token, newPassword } = req.body;
  // TODO: Validate token, update password
  res.status(200).json({ message: 'Password has been reset.' });
}
