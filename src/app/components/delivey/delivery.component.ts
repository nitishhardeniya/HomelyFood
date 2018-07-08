import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
    selector : 'delivery-details',
    templateUrl : './delivery.component.html'
})

export class DeliveryComponent {
    constructor(private router:Router){}

    ngOnInit (){

    }

    continueToPayment(){
        this.router.navigate(['/','checkout']);
    }
}