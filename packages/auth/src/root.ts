import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@edgarguzman/prisma';
import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Discord from 'next-auth/providers/discord';
import React from 'react';
import { z } from 'zod';

export type * from '../../types/src/next-auth';

const userEmailAndPasswordSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const options: NextAuthConfig = {
    debug: true,
    basePath: '/api/auth',
    secret: process.env.AUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        session({ session, token }) {    
          return {
            ...session,
            user: {
              ...session.user,
              id: token.id,
              name: token.name,
            },
          };
        },
        jwt({ token, user }) {
          console.log('JWT Callback', {
            token,
            user,
          });

          if (user) {
            let u = user as unknown as any;

            return {
              ...token,
              id: u.id,
              name: u.name,
            };
          }

          return token;
        },
      },
    providers: [
        Discord,
        Credentials({
            // text: '',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: '',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                let credential = userEmailAndPasswordSchema.parse(credentials);

                let findUser = await prisma.user.findUnique({
                    where: {
                        email: credential.email,
                    },
                });

                if (!findUser) return null;

                let hashPassword = await bcrypt.compare(credential.password, findUser.password as string);

                if (!hashPassword) return null;

                return {
                    ...findUser,
                    password: hashPassword,
                };
            },
        }),
    ],
};

const { auth: uncachedAuth } = NextAuth(options);

export const auth = React.cache(uncachedAuth);

export const { handlers, signIn, signOut } = NextAuth(options);
