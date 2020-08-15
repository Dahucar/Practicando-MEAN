import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-search',
  templateUrl: '../topics/topics.component.html',
  styleUrls: ['./search.component.css'],
  providers: [TopicService]
})
export class SearchComponent implements OnInit {
  public paginando: boolean = false; 
  public topics: Topic[];
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _topicService: TopicService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let busqueda = params['busqueda'];
      this._topicService.searchTopics(busqueda).subscribe(
        response => {
          this.topics = response.topics; 
        },
        error => {
          console.log(error);
        }
      );
    });
  }

}
