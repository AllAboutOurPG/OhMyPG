import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BabyTeam';
  pgList: Observable<any>;

  constructor(private firestore: AngularFirestore){
    this.pgList = this.firestore.collection('PGS').valueChanges();
  }
}
