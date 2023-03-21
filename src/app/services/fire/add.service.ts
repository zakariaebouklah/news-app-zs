import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Article} from "../../models/article";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {collection, query, where} from "@angular/fire/firestore";
import {getDocs} from "@angular/fire/firestore/lite";

@Injectable({
  providedIn: 'root'
})
export class AddService {

  private postDoc: AngularFirestoreDocument<Article>;

  constructor(private ngFirestore: AngularFirestore, private ngFireAuth : AngularFireAuth) {}

  addNewPostToCollection(post: Article)
  {
    this.ngFireAuth.onAuthStateChanged((user) => {
      // @ts-ignore
      this.ngFirestore.collection('Post').add({
        author: post.author,
        description: post.description,
        image: post.urlToImage,
        title: post.title,
        url: post.url,
        userid: user?.uid
      })
        .then(() => {
          console.log("ADD")
        })
        .catch()
    }).then()
      .catch()
  }

}
