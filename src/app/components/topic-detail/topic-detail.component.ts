import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TopicService } from '../../services/topic.service';
import { Topic } from 'src/app/models/topic';
import { UserService } from '../../services/user.service';
import { ComentService } from '../../services/coment.service';
import { User } from 'src/app/models/user';
import { Coment } from 'src/app/models/coment';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css'],
  providers: [TopicService, UserService, ComentService]
})
export class TopicDetailComponent implements OnInit {
  public topic: any;
  public dato: string;
  public token: string;
  public identity: any;
  public comment: Coment 
  public status: string;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _topicService: TopicService,
    private _userService: UserService,
    private _comentService: ComentService
  ) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.comment = new Coment('', '', this.identity._id);
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['idTopic'];
      this.findTopic(id);  
    }); 
  }

  findTopic(topicId: string){
    this._topicService.getOneTopic(topicId).subscribe(
      response => {
        if (response.topic) {
          this.topic = response.topic;  
          
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  comentar(formComent){
    this._comentService.add(this.comment, this.token, this.topic._id).subscribe(
      response => {
        this.status = "Comentario agregado"; 
        formComent.reset();
      },
      error => {
        this.status = "Error agregado"; 
      }
    );
  }

}
