import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import {UserService} from './services/user.service';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {StoryComponent} from './components/story/story.component';


import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports: [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent,StoryComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    UserService,
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard,
  ]
})

export class AppModule { }
