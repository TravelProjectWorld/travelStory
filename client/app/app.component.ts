import { Component, OnInit } from '@angular/core';
import { Auth } from './services/auth.service';
import { UserService } from "./services/user.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private auth:Auth,
        ){
         var profile = JSON.parse(localStorage.getItem('profile'));
         console.log('user info');
         console.log(profile);
         console.log('user end');
    }
    ngOnInit(): void {
        
    }
    refresh(){
        window.location.reload()
    }

}
