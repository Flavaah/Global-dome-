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
