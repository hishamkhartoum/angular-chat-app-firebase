import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "./services/firebase.service";
import {DocumentData, QuerySnapshot} from "firebase/firestore";
import {MessagingService} from "./services/messaging.service";
import {User} from "./model/user.model";
import {UserType} from "./model/message.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message = {
    userId: '123',
    createdDate: Date.now(),
    msg: '',
    user: {
      name: 'Trans test',
      email: 'test@test.com',
      username: 'transTest'
    },
    userType:UserType.Trans,
  }
  messageCollectiondata: { id: string, msg: string, user: User,createdDate:Date,userType:UserType }[] | any = [];


  constructor(private messageService: MessagingService) { }

  ngOnInit(): void {
    this.get();
    this.messageService.obsr_UpdatedSnapshot.subscribe((snapshot) => {
      this.updateMessageCollection(snapshot);
    })
  }

  async add() {
    const { msg } = this.message;

    await this.messageService.addMessage(this.message.userId,Date.now(), msg,this.message.user,this.message.userType);
    this.message.userId = "";
    this.message.msg = "";
    this.message.user.username = "";
    this.message.user.name = "";
    this.message.user.email = "";
  }

  async get() {
    const snapshot = await this.messageService.getMessages();

    this.updateMessageCollection(snapshot);
  }

  get sortData() {
    return this.messageCollectiondata.sort((a:any, b:any) => {
      return <any>new Date(a.createdDate) - <any>new Date(b.createdDate);
    });
  }
  updateMessageCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.messageCollectiondata = [];
    snapshot.docs.forEach((message) => {
      this.messageCollectiondata.push({ ...message.data(), id: message.id });
    })
  }

  async delete(userId: string) {
    await this.messageService.deleteMessage(userId);
  }

  async update(userId: string,createdDate:number, msg: HTMLInputElement, user: any,userType:UserType) {
    await this.messageService.updateMessage(userId,createdDate, msg,user,userType);
  }

  changeDate(createdDate: any) {
    let messageDate:number = new Date(createdDate).getTime();
    return messageDate

  }

  getType(userType: UserType) {
    let exist:boolean = userType.toString() == '0'?true:false;
    return exist
  }
}
