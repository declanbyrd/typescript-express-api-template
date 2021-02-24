import config from '../config';

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
export const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${config.auth.issuer}.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: config.auth.audience,
  issuer: config.auth.issuer,
  algorithms: ['RS256'],
});

export const checkScopes = jwtAuthz(['read:messages']);
