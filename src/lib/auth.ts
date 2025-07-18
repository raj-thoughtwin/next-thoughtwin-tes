import jwt from 'jsonwebtoken'

export function signToken(payload: object): string {
  if (!process.env.NEXT_PUBLIC_JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in the environment variables')
  }

  return jwt.sign(payload, process.env.NEXT_PUBLIC_JWT_SECRET, { expiresIn: '1h' })
}