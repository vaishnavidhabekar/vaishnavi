import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/constants/app-constant';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent  implements OnInit {
  public profileDetails = Profile;
  constructor() { }

  ngOnInit() {}

}
