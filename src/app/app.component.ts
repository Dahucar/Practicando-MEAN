import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';
import { Global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title = 'frontend';
  public identity: any;
  public token: any;
  public URL: string;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService
  ){
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
    this.URL = Global.URL_USERS; 
  }

  ngOnInit(){ 
  } 
  
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio']);    
  }
}
