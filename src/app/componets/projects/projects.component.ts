import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/constants/app-constant';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent  implements OnInit {
  public profileDetails = Profile;
  constructor() { }

  ngOnInit() {}

}
