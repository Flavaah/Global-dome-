// Session management utilities
import { auth } from './config';

export async function requireSession(req, res, next) {
  // TODO: Kontrollera session/cookie
  // Om ej inloggad, returnera 401 eller redirect
  next();
}

export async function protectRoute(handler) {
  return async (req, res) => {
    // TODO: Kontrollera session/cookie
    // Om ej inloggad, returnera 401 eller redirect
    return handler(req, res);
  };
}

// Enkel verifySession för utveckling
export async function verifySession(req: any) {
  // Här kan du läsa cookies, headers eller annat för att verifiera session
  // För utveckling: returnera en fejkad session
  return { role: 'admin', user: 'dev' };
}
