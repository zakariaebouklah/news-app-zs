import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../services/logout.service";
import {StateService} from "../../services/state.service";
import {ReadService} from "../../services/fire/read.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {collection, getDocs, query, where} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Article} from "../../models/article";
import {FireArticle} from "../../models/fireArticle";
import {RemoveService} from "../../services/fire/remove.service";

@Component({
  selector: 'app-saves',
  templateUrl: './saves.page.html',
  styleUrls: ['./saves.page.scss'],
})
export class SavesPage implements OnInit {

  saves: FireArticle[] = [];

  constructor(
    public logoutService: LogoutService,
    private stateService: StateService,
    public readService: ReadService,
    private ngFirestore: AngularFirestore,
    private ngAuth: AngularFireAuth,
    private removeService: RemoveService
  ) { }

  ngOnInit() {
    this.stateService.handleAuthStateChanged()

    this.ngAuth.onAuthStateChanged((user) => {
      const colRef = collection(this.ngFirestore.firestore, 'Post')
      // @ts-ignore
      const q = query(colRef, where('userid', '==', user.uid))
      getDocs(q)
        .then(snap => {
          // console.log(snap.docs)
          snap.docs.forEach(doc => {
            // console.log(doc.id)
            //@ts-ignore
            this.saves.push(doc.data())
          })
          // console.log(this.saves)
        })
        .catch(err => {
          console.log(err)
        })
    }).then()
  }

  handleRemove(article: FireArticle, event: Event)
  {
    event.preventDefault();
    this.removeService.removeArticleFromUserSaves(article);
    console.log("handling the deletion...")
  }

}
