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

    getTopic(userId: string): Observable<any>{
        let miHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');
        return this._http.get(this.url+'/userTopics/'+userId, {headers: miHeaders});
    }

    getOneTopic(id): Observable<any>{
        return this._http.get(this.url+'/topic/'+id);
    }

    getAllTopics(page = 1): Observable<any>{
        return this._http.get(this.url+'/topics/'+page);
    }

    updateTopicByUser(topic: Topic, token: string): Observable<any>{
        let params = JSON.stringify(topic);
        let miHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', token); 
        return this._http.put(this.url+'/topic/'+topic._id, params, {headers: miHeaders});
    }

    deleteTopicByUser(topicId: string, token: string): Observable<any>{ 
        let miHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', token); 
        return this._http.delete(this.url+'/topic/'+topicId, {headers: miHeaders});
    }

    searchTopics(busqueda: string): Observable<any>{
        return this._http.get(this.url+'/search/'+busqueda);
    }
}