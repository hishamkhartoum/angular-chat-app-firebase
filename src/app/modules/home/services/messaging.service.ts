import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference, deleteDoc, doc,
  DocumentData,
  Firestore, getDocs,
  getFirestore, onSnapshot,
  QuerySnapshot, updateDoc
} from "firebase/firestore";
import {Subject} from "rxjs";
import {initializeApp} from "firebase/app";
import {environment} from "../../../../environments/environment";
import {User} from "../model/user.model";
import {UserType} from "../model/message.model";

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  db: Firestore;
  messageCol: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebaseConfig);
    this.db = getFirestore();
    this.messageCol = collection(this.db, 'messages');

    // Get Realtime Data
    onSnapshot(this.messageCol, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }

  async getMessages() {
    const snapshot = await getDocs(this.messageCol);
    return snapshot;
  }

  async addMessage(userId: string, createdDate: number, msg: string, user: User, userType: UserType) {
    await addDoc(this.messageCol, {
      createdDate,
      msg,
      userType,
      user
    })
    return;
  }

  async deleteMessage(userId: string) {
    const docRef = doc(this.db, 'messages', userId)
    await deleteDoc(docRef);
    return;
  }

  async updateMessage(userId: string, createdDate: number, msg: HTMLInputElement, user: User, userType: UserType) {
    const docRef = doc(this.db, 'messages', userId);
    await updateDoc(docRef, { createdDate,
      msg,
      userType,
      user
    })
    return;
  }
}
