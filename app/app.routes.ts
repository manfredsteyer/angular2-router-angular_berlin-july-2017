import { RouterConfig, provideRouter } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FlightSearchComponent} from './flight-search/flight-search.component';
import { PassengerSearchComponent} from './passenger-search/passenger-search.component';
import { FlightEditComponent} from './flight-edit/flight-edit.component';
import { FlightBookingComponent} from './flight-booking/flight-booking.component';
import { FlightBookingGuard} from './flight-booking/flight-booking.guard';
import { FlightEditGuard} from './flight-edit/flight-edit.guard';
import { InfoComponent} from './info/info.component';
import { DashboardComponent} from './dashboard/dashboard.component';


const APP_ROUTES: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'info',
        component: InfoComponent,
        outlet: 'aux'

    },
     {
        path: 'dashboard',
        component: DashboardComponent,
        outlet: 'aux'
    },    
    {
        path: 'flight-booking',
        component: FlightBookingComponent,
        canActivate: [FlightBookingGuard],
        children: [
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent,
                canDeactivate: [FlightEditGuard]
            }
        ]
    }
];

export const APP_ROUTER_PROVIDERS = [
    FlightEditGuard,
    FlightBookingGuard,
    provideRouter(APP_ROUTES)
];