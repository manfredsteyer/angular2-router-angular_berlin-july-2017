import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { FlightEditComponent} from './flight-edit.component';
import { Injectable } from '@angular/core';

@Injectable()
export class FlightEditGuard implements CanDeactivate<FlightEditComponent> {

    canDeactivate(
            component: FlightEditComponent, 
            route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot) {

                return component.canDeactivate();
    }

}