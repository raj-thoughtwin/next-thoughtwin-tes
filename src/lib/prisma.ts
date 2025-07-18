import { PrismaClient } from '@prisma/client'

//Tell TypeScript that "globalThis.prisma" may exist
declare global {
    var prisma: PrismaClient | undefined;
}

//  Either use the existing Prisma Client, or create a new one
export const prisma = globalThis.prisma || new PrismaClient();

// In Development Mode, store it on `globalThis`
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
