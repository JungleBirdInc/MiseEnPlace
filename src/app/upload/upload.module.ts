import {
  NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UploadComponent } from './upload.component';
import { MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule } from '@angular/material';
// import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatListModule, FlexLayoutModule, HttpClientModule, BrowserAnimationsModule, MatProgressBarModule],
<<<<<<< HEAD
  // declarations: [ DialogComponent], // UploadComponent
  // exports: [UploadComponent],
  // entryComponents: [DialogComponent], // Add the DialogComponent as entry component
=======
  declarations: [],
  exports: [],
  entryComponents: [], // Add the DialogComponent as entry component
>>>>>>> 1af70e44c20cacd5cc1bf7e09828d06982df3669
  providers: [UploadService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class UploadModule { }
