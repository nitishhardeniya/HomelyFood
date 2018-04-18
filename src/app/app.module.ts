import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { FoodComponent }  from './components/food.component';
import { CheckoutComponent }  from './components/checkout.component';
import { FoodItemService } from './components/food.service';

// Route Configuration
export const routes: Routes = [
  { path: 'home', component: FoodComponent },
  { path: 'checkout', component: CheckoutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,routing ],
  declarations: [ AppComponent, FoodComponent, CheckoutComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ FoodItemService ]
})
export class AppModule { }
