import { auth } from "express-oauth2-jwt-bearer";








export const jwtCheck = auth({
    audience: 'food-app-api',
    issuerBaseURL: 'https://dev-kfnko1nqujylhmch.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });