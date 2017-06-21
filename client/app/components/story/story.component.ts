import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { UserService } from "../../services/user.service";
import { Story } from "./story";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'story',
    templateUrl: 'story.component.html',
    styleUrls: ['stories.component.css']
})
export class StoryComponent implements OnInit {
    allErrors: String [];
    new_story: Story
    returnUrl: String
    countryList: String[] =["United States of America", "Mexico", "Canada", "Sweden", "Iceland"]

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        ){    }

    ngOnInit() {
        this.new_story=new Story;
    }
    add_story(){
        this.userService.create_story(this.new_story)
                .then(()=>{
                    this.new_story=new Story
                    //After added a story redirect to Home Page
                    this.returnUrl=this.route.snapshot.queryParams["/"] || "/";
                    this.router.navigate([this.returnUrl])
                })
                .catch(err=>{
                    //Display backend errors.
                    this.allErrors=[];
                    let res=JSON.parse(err._body)
                    for(var key  in res.errors){
                    this.allErrors.push(res.errors[key].message)
                }
            })
    }



            
}
