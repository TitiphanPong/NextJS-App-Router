import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};


/*ENV AT MIDDLEWARE*/


/* # Recommended for most uses
DATABASE_URL=postgres://neondb_owner:npg_rFYX91TcWRil@ep-shy-feather-a1ifasz7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_rFYX91TcWRil@ep-shy-feather-a1ifasz7.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

# Parameters for constructing your own connection string
PGHOST=ep-shy-feather-a1ifasz7-pooler.ap-southeast-1.aws.neon.tech
PGHOST_UNPOOLED=ep-shy-feather-a1ifasz7.ap-southeast-1.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=npg_rFYX91TcWRil

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://neondb_owner:npg_rFYX91TcWRil@ep-shy-feather-a1ifasz7-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://neondb_owner:npg_rFYX91TcWRil@ep-shy-feather-a1ifasz7.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-shy-feather-a1ifasz7-pooler.ap-southeast-1.aws.neon.tech
POSTGRES_PASSWORD=npg_rFYX91TcWRil
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:npg_rFYX91TcWRil@ep-shy-feather-a1ifasz7-pooler.ap-southeast-1.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:npg_rFYX91TcWRil@ep-shy-feather-a1ifasz7-pooler.ap-southeast-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require

# Neon Auth environment variables for Next.js
NEXT_PUBLIC_STACK_PROJECT_ID=37a437c4-f76b-4346-b701-2799fadad7b5
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=pck_7zfqjd9ztj3svzbtfxn2jkb7x3afgatwmhjfrdy147470
STACK_SECRET_SERVER_KEY=ssk_n72rembvw8ctanhj4h82062npw6d09gr2qxy3sg7qmcrg

# AUTH KEYS
AUTH_SECRET=3883945f9e772ebf7d9cbe60a900df3e */