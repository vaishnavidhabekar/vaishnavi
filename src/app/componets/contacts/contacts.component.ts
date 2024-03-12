import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/constants/app-constant';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent  implements OnInit {
  public profileDetails = Profile;
  constructor() { }

  ngOnInit() {}

}
