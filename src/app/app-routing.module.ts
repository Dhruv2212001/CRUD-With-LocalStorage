import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceComplaintComponent } from './components/insurance-complaint/insurance-complaint.component';
import { AddInsuranceComplaintComponent } from './components/add-insurance-complaint/add-insurance-complaint.component';

const routes: Routes = [
  {path:'InsuranceComplaintComponent', component:InsuranceComplaintComponent},
  {path:'AddComplaint/:id', component:AddInsuranceComplaintComponent},
  {path:'AddComplaint', component:AddInsuranceComplaintComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
