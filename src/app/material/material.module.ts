import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule, 
        MatTabsModule,
        MatToolbarModule,MatFormFieldModule,MatInputModule,MatSelectModule, MatCheckboxModule} from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  


@NgModule({
  exports: [MatListModule,MatCheckboxModule,
    MatTabsModule,
    MatToolbarModule,MatFormFieldModule,CommonModule,FormsModule,ReactiveFormsModule,MatInputModule,MatSelectModule]
})
export class MaterialModule { }
