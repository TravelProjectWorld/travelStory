import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { UserService } from "../../services/user.service";
import { Story } from "./story";

@Component({
    moduleId: module.id,
    selector: 'story',
    templateUrl: 'story.component.html',
    styleUrls: ['stories.component.css']
})
export class StoryComponent implements OnInit {
    new_story: Story

    constructor(
        private userService: UserService,
        ){    }

    ngOnInit() {
        this.new_story=new Story;
    }
    add_story(){
        this.userService.create_story(this.new_story)
                .then(()=>{
                this.new_story=new Story
                })
                .catch(err=>{console.log("Error creating story")})
            }
            
}
