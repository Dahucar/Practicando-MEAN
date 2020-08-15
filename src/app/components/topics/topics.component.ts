import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { Topic } from '../../models/topic';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  providers: [TopicService]
})
export class TopicsComponent implements OnInit {
  public paginando: boolean = true; 
  public topics: Array<Topic>;
  public totalPges: any;
  public page: any;
  public pageActive: any;
  public nextPage: any;
  public prevPage: any;
  public numberPages: Array<any>;
  public active: string;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _topicService: TopicService
  ) { 
    this.topics = Array();
  } 

  ngOnInit(): void { 
    this._route.params.subscribe(params => {
      let page = params['page'];
      this.getAllTopics(page);
    });
  }

  getAllTopics(page){
    this._topicService.getAllTopics(page).subscribe(
      response => {
        if (response.topics) { 
          this.topics = response.topics; 
          this.pageActive = parseInt(page);

          this.totalPges = response.totalPages;
          var numberPages = [];
          for (let i = 1; i <= this.totalPges; i++) {
            numberPages.push(i); 
          } 

          this.numberPages = numberPages;
          if (page >= 2) {
            this.prevPage = parseInt(page) - 1;
          }else{
            this.prevPage = 1;
          }

          if (page < this.totalPges) {
            this.nextPage = parseInt(page) + 1;
          } else {
            this.nextPage = this.totalPges;
          } 
          
        } else {
          this._router.navigate(['/inicio']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
