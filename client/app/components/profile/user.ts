export class User {
    constructor(
        public user_id : string = "",
        public name: string = "",
        public nickname: string = "",
        public given_name: string = "",
        public family_name: string = "",
        public gender: string = "",
        public picture: string = "",
        public createdAt: Date =  new Date(),
        public updatedAt: Date = new Date()
    ){}
}
