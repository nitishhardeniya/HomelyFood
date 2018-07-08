import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';


@Component({
    selector : 'delivery-details',
    templateUrl : './delivery.component.html'
})

export class DeliveryComponent {
    delivery:Object;
    
    constructor(private router:Router){
        this.delivery = {};
    }
    
    ngOnInit (){

    }

    continueToPayment(){
        console.log(this.delivery)
        this.router.navigate(['/','checkout']);
    }
}