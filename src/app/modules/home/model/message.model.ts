import {User} from "./user.model";

export enum UserType {
  Trans,
  Recipient,
}
export interface Message {
  id?:number
  userType?:UserType
  createdTime?:Date
  msg?:String
  user?:User
  receiver?:User
}
