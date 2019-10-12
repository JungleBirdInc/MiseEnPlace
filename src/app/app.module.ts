// tslint:disable-next-line: max-line-length
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// NG-BOOTSTRAP
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// MATERIAL
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule, } from '@angular/material';

// ROUTING
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// COMPONENTS
import { HomeComponent } from './home/home.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ForecastingComponent } from './forecasting/forecasting.component';
import { SettingsComponent } from './settings/settings.component';
import { ScanInvoiceComponent } from './scan-invoice/scan-invoice.component';
import { SuggestOrderComponent } from './suggest-order/suggest-order.component';
import { ScanBarCodeComponent } from './scan-bar-code/scan-bar-code.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { OrganizationComponent } from './organization/organization.component';
import { InventoryWizardComponent } from './inventory-wizard/inventory-wizard.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { EditdistComponent } from './editdist/editdist.component';
import { GetdistComponent } from './getdist/getdist.component';
import { NewrepComponent } from './newrep/newrep.component';
import { NewdistComponent } from './newdist/newdist.component';
import { NewprodComponent } from './newprod/newprod.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { BurnListComponent } from './burn-list/burn-list.component';
import { NewinvoiceComponent } from './newinvoice/newinvoice.component';

// IGNITE
import {
  IgxNavbarModule,
  IgxBottomNavModule,
  IgxDividerModule,
  IgxDropDownModule,
  IgxInputGroupModule,
  IgxRippleModule,
  IgxIconModule,
  IgxToggleModule,
  IgxButtonModule,
  IgxDatePickerModule,
  IgxTimePickerModule,
  IgxComboModule,
  IgxSelectModule,
  IgxCardModule,
  } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoicesComponent,
    OrdersComponent,
    InventoryComponent,
    ForecastingComponent,
    SettingsComponent,
    ScanInvoiceComponent,
    SuggestOrderComponent,
    ScanBarCodeComponent,
    UpdateStockComponent,
    EditInvoiceComponent,
    LogInComponent,
    RegistrationComponent,
    OrganizationComponent,
    TopnavComponent,
    BottomnavComponent,
    OrganizationComponent,
    InventoryWizardComponent,
    EditdistComponent,
    GetdistComponent,
    NewrepComponent,
    NewdistComponent,
    NewprodComponent,
    ReviewOrderComponent,
    BurnListComponent,
    NewinvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    IgxBottomNavModule,
    IgxNavbarModule,
    IgxDividerModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxIconModule,
    IgxToggleModule,
    ReactiveFormsModule,
    IgxToggleModule,
    FormsModule,
    IgxButtonModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    IgxComboModule,
    IgxSelectModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    IgxCardModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
