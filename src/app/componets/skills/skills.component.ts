import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/constants/app-constant';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  implements OnInit {
  public profileDetails = Profile;
  constructor() { }

  ngOnInit() {}

}
