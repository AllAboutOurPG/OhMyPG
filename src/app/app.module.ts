import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';

import { MaterialModule } from './material/material.module';
import { SharedModule } from "../shared/shared.module";
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
=======
import { AngularFireStorage } from '@angular/fire/storage';
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    SharedModule
  ],
<<<<<<< HEAD
  providers: [AngularFirestore, AngularFireAuth],
=======
  providers: [AngularFirestore,AngularFireStorage],
>>>>>>> origin/master
  bootstrap: [AppComponent]
})
export class AppModule { }
