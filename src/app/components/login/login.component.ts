import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public user: User;
  public identity: any;
  public token: string;
  public mensaje: String;
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.user = new User('','','','','','ROLE_USER');
    this.mensaje = '';
  }

  ngOnInit(): void {
  }

  onSubmit(formLogin){
    this._userService.login(this.user).subscribe(
      response => {
        if(response.user && response.user._id){ 
          this.identity = response.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));
          this._userService.login(this.user, true).subscribe(
            response =>{
              this.token = response.token;
              localStorage.setItem('token', this.token);
              this._router.navigate(['/inicio']);
            },
            err => {
              this.mensaje = 'Error al iniciar sesión';
            });
        }else{ 
          this.mensaje = response.msg;
        }
      }, 
      error => {
        this.mensaje = 'Error al iniciar sesión';
      }
    );
  }

}
