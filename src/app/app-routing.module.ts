import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdistComponent } from './getdist/getdist.component';

// LOGIN
import { LogInComponent } from './log-in/log-in.component';

// REGISTRATION
import { RegistrationComponent } from './registration/registration.component';

// ORGANIZATION
import { OrganizationComponent } from './organization/organization.component';

// INVENTORY WIZARD
import { InventoryWizardComponent } from './inventory-wizard/inventory-wizard.component';

// REVIEW ORDER COMPONENT
import { ReviewOrderComponent} from './review-order/review-order.component';


// INVOICE
import { NewinvoiceComponent } from './newinvoice/newinvoice.component';

// PERSISTANT NAV
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { ForecastingComponent } from './forecasting/forecasting.component';

// HOME PAGE
import { ScanInvoiceComponent } from './scan-invoice/scan-invoice.component';
import { SuggestOrderComponent } from './suggest-order/suggest-order.component';
import { ScanBarCodeComponent } from './scan-bar-code/scan-bar-code.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';

// DISTRIBUTOR
import { NewdistComponent } from './newdist/newdist.component';
import { NewprodComponent } from './newprod/newprod.component';
import { NewrepComponent } from './newrep/newrep.component';
import { EditdistComponent } from './editdist/editdist.component';
import { BurnListComponent } from './burn-list/burn-list.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'invoices', component: InvoicesComponent },
{ path: 'inventory', component: InventoryComponent },
{ path: 'orders', component: OrdersComponent },
{ path: 'settings', component: SettingsComponent },
{ path: 'forecasting', component: ForecastingComponent },
{ path: 'scan-invoice', component: ScanInvoiceComponent },
{ path: 'suggest-order', component: SuggestOrderComponent },
{ path: 'scan-bar-code', component: ScanBarCodeComponent},
{ path: 'update-stock', component: UpdateStockComponent },
{ path: 'edit-invoice', component: EditInvoiceComponent },
{ path: 'log-in', component: LogInComponent},
{ path: 'registration', component: RegistrationComponent},
{ path: 'organization', component: OrganizationComponent},
{ path: 'inventory-wizard', component: InventoryWizardComponent},
{ path: 'editdist', component: EditdistComponent },
{ path: 'getdist', component: GetdistComponent },
{ path: 'newrep', component: NewrepComponent },
{ path: 'newdist', component: NewdistComponent },
{ path: 'newprod', component: NewprodComponent },
{ path: 'review-orders', component: ReviewOrderComponent},
{ path: 'burn', component: BurnListComponent},
{ path: 'newinvoice', component: NewinvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
