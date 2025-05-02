import type { User } from '@edgarguzman/prisma';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: UserInterface & {
      id: string;
    } & DefaultSession['user'];
  }

  interface UserInterface extends User {}
}
