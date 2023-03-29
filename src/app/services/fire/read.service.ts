import { Injectable } from '@angular/core';
import {AngularFirestore, QueryDocumentSnapshot} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {collection, getDocs, query, where} from "@angular/fire/firestore";
import {Article} from "../../models/article";

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  saves: Article[] = [];
  userId: string = "";

  constructor(private ngFirestore: AngularFirestore, private ngFireAuth: AngularFireAuth) { }

  defineCurrentUser(): void
  {
    this.ngFireAuth.onAuthStateChanged((user) => {
      // @ts-ignore
      this.userId = user.uid
      console.log(this.userId)
    })
      .then(r => {
        console.log(r)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getSavesByUserId(): void
  {
    this.defineCurrentUser();
    console.log(this.userId)
    const colRef = collection(this.ngFirestore.firestore, 'Post');
    const q = query(colRef, where("userid", "==", this.userId))
    console.log(q)
    getDocs(q)
      .then(snap => {

        console.log(snap.docs)

      })
      .catch(() => {

      })
  }

}
