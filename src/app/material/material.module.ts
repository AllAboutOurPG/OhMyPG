import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule, 
        MatTabsModule,
        MatToolbarModule } from '@angular/material';


@NgModule({
  exports: [MatListModule,
    MatTabsModule,
    MatToolbarModule]
})
export class MaterialModule { }
