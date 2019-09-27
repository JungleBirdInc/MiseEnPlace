import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
{ path: ' ', component: HomeComponent },
{ path: 'invoice', component: InvoiceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
