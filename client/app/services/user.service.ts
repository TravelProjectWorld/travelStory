import { Injectable } from '@angular/core';
import { User } from './../components/profile/user';
import { Http, Headers, RequestOptions } from "@angular/http";
 
import 'rxjs/Rx';
import { Story } from "../components/story/story";
// import {Observable} from 'rxjs/Rx';

const HEADERS = new Headers({"Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers: HEADERS})

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  get_all_users(){
    return this.http.get('/get_users') //.map so we can go through each piece of return object and make it json data
      .map(data => data.json()).toPromise()
  }

  create_user(user: User) {
      console.log('from User service');
       return this.http.post('/users', user, OPTIONS).toPromise()
  }
    create_story(story: Story) {
      console.log('from User service');
      return this.http.post('/add_story', story, OPTIONS).toPromise()
  }
    get_all_stories(){
    return this.http.get('/get_stories')
      .map(data => data.json()).toPromise()
  }

}

