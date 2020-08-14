import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService, TopicService]
})
export class EditComponent implements OnInit {
  public topic: Topic;
  public identity: any;
  public token: any;
  public status: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _topicService: TopicService
  ) { 
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();
    this.topic = new Topic('', '', '', '', '', '', this.identity._id, null);
  }

  ngOnInit(): void {
    this.getOneTopic();
  }

  onSubmit(addForm){
    this._topicService.updateTopicByUser(this.topic, this.token).subscribe(
      response => { 
        this.status = "Topic actualizado correctamente"; 
      }, 
      error => {
        console.log(error);
      }
    );
  }

  getOneTopic(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._topicService.getOneTopic(id).subscribe(
        response => {
          if (response.topic) {
            this.topic = response.topic; 
          }
          //this._router.navigate(['/condig/'+id]);
        },
        error => {
          console.log(error);
        }
      );
    });
  }

}
