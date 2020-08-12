import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Global } from './global';

@Injectable()
export class UserService {
    public url: String;    
    constructor(
        private _http: HttpClient
    ){ 
        this.url = Global.URL_USERS;
    }

    getIdentity(): any{
        //obtener el elemento guardado en el localStorage y pasarlo a un objeto de JS
        let identity = JSON.parse(localStorage.getItem('identity'));
        return identity;
    }

    getToken(): any{
        //obtener el token del localStorage
        let token = localStorage.getItem('token');
        return token;
    }

    registro(user: User): Observable<any>{
        //comvertir el objeto del usuario a un JsonString
        let params = JSON.stringify(user);
        //definir las cabeceras
        let miHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        //hacer peticion ajax
        return this._http.post(this.url+'/save', params, {headers: miHeaders});
    }

    login(user: any, getToken = null): Observable<any>{
        //comprobar que le enviamos el token (una varible que necesita el backend)
        if(getToken != null){
            user.getToken = getToken;
        }

        let params = JSON.stringify(user);
        let miHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'/login', params, {headers: miHeaders});
    }

    update(user: any): Observable<any>{
        let params = JSON.stringify(user);
        let miHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', this.getToken());
        return this._http.put(this.url+'/update', params, {headers: miHeaders});
    }
}