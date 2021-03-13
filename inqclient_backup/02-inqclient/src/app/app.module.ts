import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'; // AKM
import { HttpClientModule } from '@angular/common/http'; // AKM
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InquiryComponent } from './inquiry/inquiry/inquiry.component';
import { ContactComponent } from './inquiry/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ContactlookupComponent } from './contactlookup/contactlookup.component';

const routes:Routes = [
  {path: '', component:LoginComponent},
  {path: 'inquiry', component:InquiryComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InquiryComponent,
    ContactComponent,
    ContactlookupComponent
    
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot (routes, {useHash: true, enableTracing:false}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    ContactlookupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
