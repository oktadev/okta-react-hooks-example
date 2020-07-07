export default {
  oidc: {
    clientId: '{clientId}',
    issuer: 'https://{oktaOrgUrl}/oauth2/default',
    redirectUri: 'http://localhost:3000/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  }
}
