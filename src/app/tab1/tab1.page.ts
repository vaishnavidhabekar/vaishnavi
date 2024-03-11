import { Component } from '@angular/core';

import { Profile } from '../constants/app-constant';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public profileDetails = Profile;
  
  constructor() {}

}
