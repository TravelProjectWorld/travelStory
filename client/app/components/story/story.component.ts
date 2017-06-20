import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'story',
    templateUrl: 'story.component.html',
    styleUrls: ['stories.component.css']
})
export class StoryComponent { 
    constructor(private auth:Auth){
        
    }
}
