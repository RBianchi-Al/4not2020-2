import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <!--app-header-bar [appName]="title"></app-header-bar-->
    <app-header-bar appName={{title}}></app-header-bar>
    <div id="content">
    <router-outlet></router-outlet>
    </div>
    <app-main-footer></app-main-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Escola Agora Vai';
}
