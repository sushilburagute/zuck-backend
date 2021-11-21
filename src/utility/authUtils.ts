import jwt, { JwtPayload } from "jsonwebtoken";

export interface TokenUser extends JwtPayload {
  _id: string;
  email: string;
}

export const JWT_SECRET = process.env.JWT_SECRET;

export function createToken(user: TokenUser) {
  return jwt.sign(
    {
      sub: user._id,
      email: user.email,
      // iss: 'api.asiimov.com',
      // aud: 'zuck.asiimov.com',
    },
    process.env.JWT_SECRET as string,
    {
      // algorithm: 'HS256',
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    }
  );
}
