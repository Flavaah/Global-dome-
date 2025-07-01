import { auth } from '../config';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { email, password } = req.body;
  // TODO: Validate credentials, create session
  res.status(200).json({ message: 'Login successful.' });
}
