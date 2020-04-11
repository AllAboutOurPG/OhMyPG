import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('showRoomDetails', { static: true }) public showRoomDetails: TemplateRef<any>;

  constructor(private firestore: AngularFirestore,private _bottomSheet: MatBottomSheet) { }  

  ngOnInit() {
  }

  roomDetails()
  {
    this._bottomSheet.open(this.showRoomDetails);
  }

}
