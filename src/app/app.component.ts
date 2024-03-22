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
  public linklist = [
    {
    name :'logo-linkedin',
    url:'https://www.linkedin.com/in/vaishnavi-dhabekar-09743b22b'
    },
    {
    name :'logo-facebook',
    url:'https://ro-ro.facebook.com/vaishnavi.dhabekar.9/'
    },
    {
    name :'logo-instagram',
    url:'https://www.linkedin.com/in/vaishnavi-dhabekar-09743b22b'
    },
    {
    name :'logo-twitter',
    url:'https://www.linkedin.com/in/vaishnavi-dhabekar-09743b22b'
    },
];
  constructor(public route: Router, public menu:MenuController) {}

 
  public open(path?: string) {
    this.route.navigate([path])
    this.menu.close();
  }
}
