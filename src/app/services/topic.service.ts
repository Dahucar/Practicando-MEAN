import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';
import { Global } from './global';

@Injectable()
export class TopicService {
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.URL_TOPICS;
    }

    demo(){
        return 'holaaa';
    }

    addTopic(topic: Topic, token: string): Observable<any>{
        let datos = JSON.stringify(topic);
        let miHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post(this.url+'/topic', datos, { headers: miHeaders });
    } 
}