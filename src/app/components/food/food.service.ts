//import { FOODITEMS } from './mocks';
import { Injectable } from '@angular/core';
import { Food } from './food'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FoodItemService{

    constructor(private http:Http){}

    getFoodItems(){
        return this.http.get('app/components/foods.json')
        .map(response => <Food[]> response.json());
    }
}