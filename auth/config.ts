// Lucia Auth configuration for email/password, email verification, and password reset

import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
import { Lucia } from 'lucia';

const prisma = new PrismaClient();

export const auth = new Lucia(
  new PrismaAdapter(prisma, {
    user: prisma.user,
    session: prisma.session
  }),
  {
    sessionCookie: {
      name: 'globaldome_session',
      expires: false,
      attributes: {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      }
    }
  }
);
