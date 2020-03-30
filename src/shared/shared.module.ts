import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from 'src/app/material/material.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';
import { DropzoneDirective } from './dropzone/dropzone.directive';
import { UploadTaskComponent } from './upload-task/upload-task.component';


@NgModule({
  declarations: [RegisterComponent, DropzoneDirective,UploadTaskComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore]
})
export class SharedModule { }
