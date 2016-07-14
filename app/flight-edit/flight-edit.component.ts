import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, Observer} from 'rxjs';

@Component({
    template: require('./flight-edit.component.html')
})
export class FlightEditComponent {

    public id: string;
    
    constructor(private route: ActivatedRoute) {
        route.params.subscribe(p => {
            this.id = p['id'];
            console.debug('new id: ' + this.id);
        });
        
    }

    // ngOnChanged
    ngOnInit() {
        var snapshotId = this.route.snapshot.params['id'];
        console.debug('snapshotId: ' + snapshotId);
    }

    exitWarning = {
        observer: null,
        show: false
    }

    decide(d: boolean) {
        this.exitWarning.show = false;
        this.exitWarning.observer.next(d);
        this.exitWarning.observer.complete();
    }

    canDeactivate() {
        this.exitWarning.show = true;
        return new Observable<boolean>((sender: Observer<boolean>) => {
            this.exitWarning.observer = sender;
            
        });
    }

}