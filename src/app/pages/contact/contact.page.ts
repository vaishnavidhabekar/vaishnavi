import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Profile } from 'src/app/constants/app-constant';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public profileDetails = Profile;

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder, public toastController:ToastController ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  ngOnInit(){
    
  }
  async submitRespose(){
    console.log(this.contactForm.value);
 
    const toast = await this.toastController.create({
      
      message: 'Thank You For Feedback',
      duration: 4000,
      buttons:["ok"]
    });
    await toast.present();
    
  }
 
}
