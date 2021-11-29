import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospialListComponent } from './hospial-list/hospial-list.component';
import { HospitalviewComponent } from './hospitalview/hospitalview.component';
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import { HospitalListItemComponent } from './hospital-list-item/hospital-list-item.component';
import { HospitalImageComponent } from './hospital-image/hospital-image.component';
import { HospitalOverviewComponent } from './hospital-overview/hospital-overview.component';
import { HospitalLocationComponent } from './hospital-location/hospital-location.component';
import { HospitalContactComponent } from './hospital-contact/hospital-contact.component';
import { HospitalDoctorsComponent } from './hospital-doctors/hospital-doctors.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationDoctoHospitalComponent } from './application-docto-hospital/application-docto-hospital.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationDocComponent } from './application-doc/application-doc.component';
import { ApplicationHosComponent } from './application-hos/application-hos.component';

@NgModule({
  declarations: [
    AppComponent,
    HospialListComponent,
    HospitalviewComponent,
    HospitalListItemComponent,
    HospitalImageComponent,
    HospitalOverviewComponent,
    HospitalLocationComponent,
    HospitalContactComponent,
    HospitalDoctorsComponent,
    ApplicationComponent,
    ApplicationDoctoHospitalComponent,
    ApplicationFormComponent,
    ApplicationDocComponent,
    ApplicationHosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
