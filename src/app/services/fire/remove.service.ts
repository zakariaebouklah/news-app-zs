import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FireArticle} from "../../models/fireArticle";
import {deleteDoc, doc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class RemoveService {

  constructor(
    private ngFirestore: AngularFirestore,
    private ngFireAuth: AngularFireAuth
  ) { }

  removeArticleFromUserSaves(article: FireArticle): void
  {
    this.ngFireAuth.onAuthStateChanged((user) => {
      deleteDoc(doc(this.ngFirestore.firestore, "Post", article.docId.trim()))
        .then(res => {
          console.log("deleted")
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }).then()
  }
 }
