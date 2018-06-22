import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="page-topbar">
      <div class="app-title">OrderFood</div>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" routerLink="/home" routerLinkActive="active">Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/checkout" routerLinkActive="active">Checkout</a>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </div>`,
  styleUrls:['./app.component.css']
})
export class AppComponent  {
  
}
