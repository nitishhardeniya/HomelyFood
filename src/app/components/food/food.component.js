"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//import { FOODITEMS } from './mocks';
var food_service_1 = require("./food.service");
var FoodComponent = (function () {
    function FoodComponent(foodItemService) {
        this.foodItemService = foodItemService;
        this.items = [];
    }
    FoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodItemService.getFoodItems()
            .subscribe(function (foodItems) { return _this.foodItems = foodItems; });
        //console.log(this.foodItems)
    };
    //public items: string[] = [];
    FoodComponent.prototype.addToCart = function (selectedItem) {
        selectedItem.quantity++;
        if (this.items.indexOf(selectedItem) < 0) {
            this.items.push(selectedItem);
        }
    };
    ;
    FoodComponent.prototype.removeFromCart = function (selectedItem) {
        if (this.items.indexOf(selectedItem) > 0) {
            this.items.splice(selectedItem);
        }
    };
    FoodComponent.prototype.incrementItemQuantity = function (selectedItem) {
        //selectedItem.quantity++;
        this.addToCart(selectedItem);
    };
    FoodComponent.prototype.decrementItemQuantity = function (selectedItem) {
        if (selectedItem.quantity > 0) {
            selectedItem.quantity--;
            this.removeFromCart(selectedItem);
        }
    };
    FoodComponent.prototype.getTotalCartValue = function () {
        var sum = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var current = _a[_i];
        }
        /*let itemsRef = this.items;
        this.items.forEach(function(index){
            sum += itemsRef[index].quantity * itemsRef[index].price;
        });*/
        return sum;
    };
    FoodComponent.prototype.continueToPayment = function () {
        //Call to API
        //redirect to payments page
    };
    return FoodComponent;
}());
FoodComponent = __decorate([
    core_1.Component({
        selector: 'food-page',
        templateUrl: './food.component.html',
        styleUrls: ['./food.component.css']
    }),
    __metadata("design:paramtypes", [food_service_1.FoodItemService])
], FoodComponent);
exports.FoodComponent = FoodComponent;
//# sourceMappingURL=food.component.js.map