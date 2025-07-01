import { auth } from '../config';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  let { email, password } = req.body;
  if (!email.endsWith('@globaldome.com')) {
    email = email.replace(/@.*/, '') + '@globaldome.com';
  }
  // TODO: Add validation, hashing, and DB logic
  // Send verification email
  res.status(200).json({ message: 'Signup successful. Please verify your email.' });
}
