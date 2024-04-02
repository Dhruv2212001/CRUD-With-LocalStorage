import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceComplaintComponent } from './components/insurance-complaint/insurance-complaint.component';
import { AddInsuranceComplaintComponent } from './components/add-insurance-complaint/add-insurance-complaint.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    InsuranceComplaintComponent,
    AddInsuranceComplaintComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
