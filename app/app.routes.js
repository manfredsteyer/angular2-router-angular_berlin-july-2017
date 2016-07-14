"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var flight_search_component_1 = require('./flight-search/flight-search.component');
var passenger_search_component_1 = require('./passenger-search/passenger-search.component');
var flight_edit_component_1 = require('./flight-edit/flight-edit.component');
var flight_booking_component_1 = require('./flight-booking/flight-booking.component');
var flight_booking_guard_1 = require('./flight-booking/flight-booking.guard');
var flight_edit_guard_1 = require('./flight-edit/flight-edit.guard');
var info_component_1 = require('./info/info.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var APP_ROUTES = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'prefix'
    },
    {
        path: 'info',
        component: info_component_1.InfoComponent,
        outlet: 'aux'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        outlet: 'aux'
    },
    {
        path: 'flight-booking',
        component: flight_booking_component_1.FlightBookingComponent,
        canActivate: [flight_booking_guard_1.FlightBookingGuard],
        children: [
            {
                path: 'flight-search',
                component: flight_search_component_1.FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: passenger_search_component_1.PassengerSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: flight_edit_component_1.FlightEditComponent,
                canDeactivate: [flight_edit_guard_1.FlightEditGuard]
            }
        ]
    }
];
exports.APP_ROUTER_PROVIDERS = [
    flight_edit_guard_1.FlightEditGuard,
    flight_booking_guard_1.FlightBookingGuard,
    router_1.provideRouter(APP_ROUTES)
];
//# sourceMappingURL=app.routes.js.map