import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
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
    //fooditem : string;
    items:string[];
    username:string[];
    
    constructor(private foodItemService:FoodItemService,private router:Router){
        this.items = [];
    }
    
    ngOnInit(){
        this.foodItemService.getFoodItems()
        .subscribe(foodItems => this.foodItems = foodItems);
        //console.log(this.foodItems)
    }
    //public items: string[] = [];

    addToCart(selectedItem:any){
        selectedItem.quantity++
        if(this.items.indexOf(selectedItem) <0){
            this.items.push(selectedItem);
        }
    };

    removeFromCart(selectedItem:any){
        if(this.items.indexOf(selectedItem) >0){
            this.items.splice(selectedItem);
        }
    }

    incrementItemQuantity(selectedItem:Food){
        //selectedItem.quantity++;
        this.addToCart(selectedItem);
    }

    decrementItemQuantity(selectedItem:Food){
        if(selectedItem.quantity > 0){
            selectedItem.quantity--;
            this.removeFromCart(selectedItem); 
        }
    }

    getTotalCartValue(){
        let sum = 0;
        for (let current of this.items) {
            //sum += current.quantity * current.price;
        }
        
        /*let itemsRef = this.items;
        this.items.forEach(function(index){
            sum += itemsRef[index].quantity * itemsRef[index].price;
        });*/
        return sum;
    }

    continueToDelivery(){
        //redirect to payments page
        console.log(this.router)
        this.router.navigate(['/','delivery']);
    }
}