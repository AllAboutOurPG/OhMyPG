import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
  apiKey: "AIzaSyBquM_BmLy2F8XRNH3w2oEmJab0z505bN8",
  authDomain: "jinvest-610bf.firebaseapp.com",
  databaseURL: "https://jinvest-610bf.firebaseio.com",
  projectId: "jinvest-610bf",
  storageBucket: "jinvest-610bf.appspot.com",
  messagingSenderId: "69796685050",
  appId: "1:69796685050:web:8a5920784209d2496e9543"
}),
    AngularFireDatabaseModule,
    MatListModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
