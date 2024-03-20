import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(){}

  path(path?: string) {
  }
  public open(path?: string) {
    alert(path);
    //this.nav.navigateForward('about')  
  } 
}
