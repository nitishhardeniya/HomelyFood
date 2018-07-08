"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
//import { UserComponent }  from './components/user.component';
var food_component_1 = require("./components/food/food.component");
var checkout_component_1 = require("./components/checkout/checkout.component");
var delivery_component_1 = require("./components/delivey/delivery.component");
var food_service_1 = require("./components/food/food.service");
// Route Configuration
exports.routes = [
    { path: 'home', component: food_component_1.FoodComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent },
    { path: 'delivery', component: delivery_component_1.DeliveryComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, exports.routing],
        declarations: [app_component_1.AppComponent, food_component_1.FoodComponent, checkout_component_1.CheckoutComponent, delivery_component_1.DeliveryComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [food_service_1.FoodItemService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map