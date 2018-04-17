import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="page-topbar">
      <div class="app-title">OrderFood</div>
      <nav>
        <a routerLink="/home" routerLinkActive="active">Explore</a>
        <a routerLink="/checkout" routerLinkActive="active">Checkout</a>
      </nav>
      <router-outlet></router-outlet>
    </div>`,
  styleUrls:['./app.component.css']
})
export class AppComponent  {
  
}
