import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

// Imports from Anguler Material
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

// Import from Ignite
import {
  IgxDividerModule,
  IgxDropDownModule,
  IgxInputGroupModule,
  IgxRippleModule,
  IgxIconModule,
  IgxToggleModule } from 'igniteui-angular';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
import { TopnavComponent } from './topnav/topnav.component';
import { RegistrationComponent } from './registration/registration.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { OrganizationComponent } from './organization/organization.component';
import { InventoryWizardComponent } from './inventory-wizard/inventory-wizard.component';

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
    TopnavComponent,
    RegistrationComponent,
    TopnavComponent,
    BottomnavComponent,
    OrganizationComponent,
    InventoryWizardComponent,
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
    IgxDividerModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxIconModule,
    IgxToggleModule,
    ReactiveFormsModule,
    FormBuilder,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
