import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Article} from "../../models/article";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {collection, query, setDoc, where, doc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private ngFirestore: AngularFirestore, private ngFireAuth : AngularFireAuth) {}

  addNewPostToCollection(post: Article)
  {
    this.ngFireAuth.onAuthStateChanged((user) => {
      // @ts-ignore
      let docRef = doc(collection(this.ngFirestore.firestore, 'Post'))
        setDoc(
          docRef,
    {
          author: post.author,
          description: post.description,
          image: post.urlToImage,
          title: post.title,
          url: post.url,
          userid: user?.uid,
          docId: docRef.id
        }
      )
        .then(() => {
          console.log("ADD")
        })
        .catch(err => {
          console.log(err)
        })
    }).then()
      .catch()
  }

}
