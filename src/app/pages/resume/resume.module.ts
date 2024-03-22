import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumePageRoutingModule } from './resume-routing.module';

import { ResumePage } from './resume.page';
import { LanguagesComponent } from 'src/app/componets/languages/languages.component';
import { ProjectsComponent } from 'src/app/componets/projects/projects.component';
import { SkillsComponent } from 'src/app/componets/skills/skills.component';
import { EducationComponent } from 'src/app/componets/education/education.component';
import { ContactsComponent } from 'src/app/componets/contacts/contacts.component';
import { PersonalDetailsComponent } from 'src/app/componets/personal-details/personal-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumePageRoutingModule
  ],
  declarations: [ResumePage,PersonalDetailsComponent,ContactsComponent,EducationComponent,SkillsComponent,ProjectsComponent,LanguagesComponent]
})
export class ResumePageModule {}
