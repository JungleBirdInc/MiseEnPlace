import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//PERSISTANT NAV
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { ForecastingComponent } from './forecasting/forecasting.component';

//HOME PAGE
import { ScanInvoiceComponent } from './scan-invoice/scan-invoice.component';
import { SuggestOrderComponent } from './suggest-order/suggest-order.component';
import { ScanBarCodeComponent } from './scan-bar-code/scan-bar-code.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';

//Login
import { LogInComponent } from './log-in/log-in.component';

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
{ path: 'log-in', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
