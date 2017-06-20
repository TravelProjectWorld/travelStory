import { User } from "../profile/user";

export class Story {
    _id:String
    user: User
    title: String
    description: String
    url: String
    createdAt: Date
    updatedAt: Date
}
