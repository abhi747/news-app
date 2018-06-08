import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../interfaces/news';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: News;
  p: number = 1; //initialize page index in pagination
  cat: string = ''; //initialize category

    constructor(private _newsService: NewsService, private spinner: NgxSpinnerService) {
      _newsService.categoryChangeListener.subscribe((data) => {
          this.p = 1; //reset page index to 1 on category change
          this.cat = data.category;
          this.getNews(this.cat,1);
      });
   }

  ngOnInit() {
      this.getNews(this.cat,1); //get news on initial page load
  }

  getNews(cat, page){
      this.spinner.show();
      this._newsService.getTopHeadLines(cat, 'in', this.p).subscribe(
          (newsList: News) => {
              this.newsList = newsList;
              this.spinner.hide();
            },
          (err) => {
              console.error(err);
              this.spinner.hide();
          }
      )

  }

}
