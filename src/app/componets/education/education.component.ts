import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/constants/app-constant';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent  implements OnInit {
   public  profileDetails = Profile;
  constructor() { }

  ngOnInit() {}

}
