import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {
  public user: User;
  public mensaje: String;
  constructor(
    private _userService: UserService
  ) {
    this.user = new User('','','','','','ROLE_USER');
    this.mensaje = '';
  }

  ngOnInit(): void { 
  }

  onSubmit(formRegistro){
    this._userService.registro(this.user).subscribe(
      response => {
        this.mensaje = response.msg;
        formRegistro.reset();
      }, 
      error => {
        this.mensaje = error.error.msg;
      }
    );
  }
}
