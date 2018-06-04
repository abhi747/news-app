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
  constructor( private _newsService: NewsService) {
      _newsService.categoryChangeListener.subscribe((data) => {
          console.log('_newsService.categoryChangeListener ---> ', data);
          this.getNews(data.category);
      });
   }

  ngOnInit() {
      this.getNews('');
  }

  getNews(cat){
      this._newsService.getTopHeadLines(cat, 'in').subscribe(
          (newsList: News) => this.newsList = newsList,
          (err) => console.error(err)
      )
  }

}
