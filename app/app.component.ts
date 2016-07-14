import { Component } from '@angular/core'
import { Router, ROUTER_DIRECTIVES } from '@angular/router'
import { HomeComponent} from './home/home.component';
import { OAuthService} from 'angular2-oauth2/oauth-service';

@Component({
    selector: 'flight-app',
    directives: [ROUTER_DIRECTIVES],
    template: require('./app.component.html')
})
export class AppComponent {

    constructor(private oauthService: OAuthService, private router: Router) {

        // this.oauthService.loginUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/authorize"; //Id-Provider?
        // this.oauthService.logoutUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/endsession?id_token={{id_token}}";
        // this.oauthService.issuer = "https://steyer-identity-server.azurewebsites.net/identity";

        this.oauthService.loginUrl = "https://localhost:44301/identity/connect/authorize"; //Id-Provider?
        this.oauthService.issuer = "https://localhost:44301/identity";

        this.oauthService.redirectUri = window.location.origin + "/home";
        this.oauthService.clientId = "spa-demo";
        this.oauthService.scope = "openid profile email voucher";
        
        this.oauthService.oidc = true;
        this.oauthService.setStorage(localStorage);
        
        this.oauthService.tryLogin({});

    
    }
}