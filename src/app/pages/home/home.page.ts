import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePageModule } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public nav: NavController) {
  }
  redirect(){
    this.nav.navigateForward('about')
  }

  ngOnInit() {
  }


}
