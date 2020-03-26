import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule, 
        MatTabsModule,
        MatToolbarModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule,
        MatRadioModule } from '@angular/material';


@NgModule({
  exports: [ReactiveFormsModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule]
})
export class MaterialModule { }
