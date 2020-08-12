import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService, TopicService]
})
export class AddComponent implements OnInit {
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
    console.log(this._topicService.demo());
  }

  onSubmit(addForm){
    this._topicService.addTopic(this.topic, this.token).subscribe(
      response => {
        if (response.topicStored) {
          this._router.navigate(['/panel']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
