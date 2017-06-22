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
  country_list: String[]=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda",
  "Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
  "Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil",
  "British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands",
  "Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus",
  "Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia",
  "Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia",
  "Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras",
  "Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan",
  "Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
  "Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia",
  "Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua",
  "Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia",
  "Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka",
  "St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan",
  "Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan",
  "Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom",
  "Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

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
    get_last_stories(){
    return this.http.get('/get_last_stories')
      .map(data => data.json()).toPromise()
  }

}

