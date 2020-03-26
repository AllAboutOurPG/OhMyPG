import { NgModule } from '@angular/core';
import {MatListModule, 
        MatTabsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,        
        MatSelectModule,
        MatOptionModule
 } from '@angular/material';


 import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  exports: [MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,    
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule]
})
export class MaterialModule { }
