import {Component} from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tryLogin();
  }
}


export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://localhost:8080/auth/realms/mycompany',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'myapp',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access api',

  showDebugInformation: true,

  // Not recommented:
  // disablePKCI: true,

  loginUrl: 'http://localhost:4200/auth/realms/mycompany/protocol/openid-connect/auth',
  tokenEndpoint: 'http://localhost:4200/auth/realms/mycompany/protocol/openid-connect/token',
  userinfoEndpoint: 'http://localhost:4200/auth/realms/mycompany/protocol/openid-connect/userinfo',
  requireHttps: false,

  // jwks: 'http://localhost:8080/auth/realms/mycompany/certs'
};
