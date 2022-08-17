import { GetServerSidePropsContext } from "next";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";

// Get our environment variables
const { JWT_SECRET } = process.env;

export function parseUser(ctx) {
  // Check if the cookie exists, if not return null
  if (!ctx.req.headers.cookie) {
    return null;
  }

  // Parse the token from headers
  const token = parse(ctx.req.headers.cookie)['token'];

  // If there is no token, return null
  if (!token) {
    return null;
  }

  // Try parsing the JWT (this can throw errors, hence the try/catch block)
  try {
    const { iat, exp, ...user } = verify(token, JWT_SECRET)

    // Return the user
    return user;
  } catch (e) {
    // Something went wrong. Likely being an invalid signature sent by the client
    return null;
  }
}