import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Global } from '../../services/global';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css'],
  providers: [UserService]
})
export class AjustesComponent implements OnInit {
  public user: User;
  public mensaje: string;
  public identity: any;
  public token: any;
  public afuConfig;
  public resetVar: boolean = true;
  public URL = Global.URL_USERS;
  constructor(
    private _userService: UserService
  ) { 
    this.mensaje = '';
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
    this.user = this.identity;
    this.afuConfig = {
      multiple: false,
      formatsAllowed: '.jpg, .jpeg, .png',
      maxSize: '50',
      uploadAPI: {
        url: this.URL+'/uploadAvatar',
        method: 'POST',
        headers: {
          'Authorization': this._userService.getToken()
        }
      },
      theme: 'attachPin',
      hideProgessBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        selectFileBtn: 'Selecciona un avatar',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Seleccionar',
        afterUploadMsg_success: 'Avatar subido',
        afterUploadMsg_error: 'Avatar error',
        sizeLimit: 'Limite de archivo superado'
      }
    };
  }

  ngOnInit(): void {
  }

  onSubmit(formRegistro){
    this._userService.update(this.user).subscribe(
      response => {
        if(response.userUpdated){
          localStorage.setItem('identity', JSON.stringify(response.userUpdated));
          this.mensaje = "Datos actualizados correctamente";
        }
      },
      error => {
        this.mensaje = "Error durante la actualización";
      }
    );
  }

  avatarUpload(data){ 
    let objJson = JSON.parse(JSON.stringify(data.body.userFound));
    this.user.image = objJson.image;
    localStorage.setItem('identity', JSON.stringify(this.user));
  }
}
