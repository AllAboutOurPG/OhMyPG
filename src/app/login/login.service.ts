import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'src/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user$: Observable<User>;
  userDetails: User;

  constructor(public angularFireAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          this.userDetails = user;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  async login(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 

    // this.afs.doc(`users/${user.uid}`).valueChanges().pipe(take(1)).subscribe((res)=>{
    //   console.log(res);
    // })

    return userRef.update(data)

  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }
}
