import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Imports from Anguler Material
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
