import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menulist = [
    {
      label: 'Home',
      iconName:'home-outline',
      routerLinkActive:'/home'
    },
    {
      label: 'About',
      iconName:'accessibility-outline',
      routerLinkActive:'/about'
    },
    {
      label: 'Resume',
      iconName:'save-outline',
      routerLinkActive:'/resume'
    },
    {
      label: 'Contact',
      iconName:'person-outline',
      routerLinkActive:'/contact'
    },
  ];
  constructor(public route: Router, public menu:MenuController) {}

 
  public open(path?: string) {
    this.route.navigate([path])
    this.menu.close();
  }
}
