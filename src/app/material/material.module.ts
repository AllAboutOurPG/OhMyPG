import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatCheckboxModule
} from '@angular/material';


@NgModule({
  exports: [ReactiveFormsModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatCheckboxModule]
})
export class MaterialModule { }
