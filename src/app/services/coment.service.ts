import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Global } from './global';

@Injectable()
export class ComentService {
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.URL_COMMENTS;
    } 

    add(coment: any, token: string, idTopic: string): Observable<any>{
        let datos = JSON.stringify(coment);
        let miHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post(this.url+'/coment/topic/'+idTopic, datos, { headers: miHeaders });
    }   

    deleteTopicByUser(topicId: string, commentId: string, token: string): Observable<any>{ 
        let miHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', token); 
        return this._http.delete(this.url+'/coment/'+ topicId +'/'+commentId, {headers: miHeaders});
    }
}