import { Component, OnInit } from '@angular/core';
// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Auth} from '../../services/auth.service';
import {User} from './user';
import {UserService} from '../../services/user.service';


@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit { 
    profile:any;
    user: User;
    all_users: User[];

    constructor(private auth:Auth, private userService: UserService){
        this.profile = JSON.parse(localStorage.getItem('profile'));
        // console.log(this.userService);
        // this.user = new User();
        this.user  = new User(this.profile.user_id, this.profile.name, this.profile.nickname, this.profile.given_name, this.profile.family_name, this.profile.gender, this.profile.picture);

        this.userService.create_user(this.user)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => console.log(err))    
       }

        ngOnInit(){
        }

}
