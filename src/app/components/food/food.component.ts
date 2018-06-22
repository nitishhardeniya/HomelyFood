import { Component } from '@angular/core';
import { Food } from './food';
//import { FOODITEMS } from './mocks';
import { FoodItemService } from './food.service';

@Component({
    selector:'food-page',
    templateUrl:'./food.component.html',
    styleUrls:['./food.component.css']
})

export class FoodComponent { 
    foodItems : Food[];
    fooditem : string;
    items:string[];
    username:string[];
    
    constructor(private foodItemService:FoodItemService){
        this.items = [];
    }
    
    ngOnInit(){
        this.foodItemService.getFoodItems()
        .subscribe(foodItems => this.foodItems = foodItems);
        //console.log(this.foodItems)
    }
    //public items: string[] = [];

    addToCart(fooditem:Food){
        /* if(this.items.indexOf(fooditem) <0){
            this.items.push(fooditem);
        } */
    };

    removeFromCart(fooditem:Food){
        /* if(this.items.indexOf(fooditem) >0){
            this.items.splice(fooditem);
        } */
    }

    incrementItemQuantity(fooditem:Food){
        fooditem.quantity++;
        this.addToCart(fooditem);
    }

    decrementItemQuantity(fooditem:Food){
        if(fooditem.quantity > 0){
            fooditem.quantity--;
            this.removeFromCart(fooditem); 
        }
        
    }

    getTotalCartValue(){
        //this.items.reduce(function(prev,next){
        //    return prev + next.quantity*next.price;
        //},0);

        let sum = 0;
        for (let item of this.items) {
            //sum += item.quantity * item.price;
        }
        return sum;
    }

    continueToPayment(){
        //Call to API
        //redirect to payments page
    }
}