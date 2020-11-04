import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <!--app-header-bar [appName]="title"></app-header-bar-->
    <app-header-bar appName={{title}}></app-header-bar>

    <router-outlet></router-outlet>
    <app-main-footer></app-main-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Escola Agora Vai';
}
