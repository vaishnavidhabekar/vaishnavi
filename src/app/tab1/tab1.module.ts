import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PersonalDetailsComponent } from '../componets/personal-details/personal-details.component';
import { ContactsComponent } from '../componets/contacts/contacts.component';
import { EducationComponent } from '../componets/education/education.component';
import { SkillsComponent } from '../componets/skills/skills.component';
import { ProjectsComponent } from '../componets/projects/projects.component';
import { LanguagesComponent } from '../componets/languages/languages.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page,PersonalDetailsComponent,ContactsComponent,EducationComponent,SkillsComponent,ProjectsComponent,LanguagesComponent ]
})
export class Tab1PageModule {}
