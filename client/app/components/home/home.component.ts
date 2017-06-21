import { Component, OnInit } from '@angular/core';
import {Auth} from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Story } from "../story/story";


@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    all_stories:Story[]

    constructor(
        private auth:Auth,
        private userService: UserService,
        ){  }

    ngOnInit(): void {
        this.get_users()
        this.get_stories()
        
    }

    //GET ALL USERS FROM DB only for developing.
    get_users(){
    this.userService.get_all_users()
        .then((data) => {
            console.log("users>>>>>>>>",data);
        })
        .catch((err) => console.log(err))  
    }
    //GET ALL STORIES FROM DB.
    get_stories(){
    this.userService.get_all_stories()
        .then((data) => {
            console.log("stories>>>>>>>>",data);
            this.all_stories=data
        })
        .catch((err) => console.log(err))  
    }
}
