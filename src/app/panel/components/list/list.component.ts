import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService, TopicService]
})
export class ListComponent implements OnInit {
  public topics: Array<Topic>;
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
  }

  ngOnInit(): void {
    this.getTopicsByUser();
  }

  getTopicsByUser(){
    let userId = this.identity._id;
    this._topicService.getTopic(userId).subscribe(
      response => {
        if(response.topics){
          this.topics = response.topics;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteTopic(topicId: string){
    this._topicService.deleteTopicByUser(topicId, this.token).subscribe(
      response => {
        if (response.topicDelete) {
          this._router.navigate(['/panel/listado']);
        }
      },
      error => {
        console.log(error)
      }
    );
  }

}
