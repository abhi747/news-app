import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../interfaces/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: News;
  constructor( private _newsService: NewsService) { }

  ngOnInit() {
      this._newsService.getTopHeadLines('business','in').subscribe(
        (newsList: News) => this.newsList = newsList,
        (err) => console.error(err)
      )
  }

}