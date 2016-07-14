"use strict";
var core_1 = require('@angular/core');
var oauth_service_1 = require('angular2-oauth2/oauth-service');
exports.APP_PROVIDERS = [
    // provide(PLATFORM_PIPES, {useValue: CityPipe, multi: true}),
    // provide(PLATFORM_DIRECTIVES, {useValue: FlightCardComponent, multi: true}),
    //FlightService,
    oauth_service_1.OAuthService,
    core_1.provide("BASE_URL", { useValue: "http://www.angular.at" })
];
//# sourceMappingURL=app.providers.js.map