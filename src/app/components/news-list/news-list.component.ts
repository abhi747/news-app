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
  p: number = 1;
  pagination: object = {
		recordsPerPage: 5,
		pageNumber: 1,
		totalItems: 0
  };
	paginationButtonList = [];

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
	  this._newsService.getTopHeadLines(cat, this.pagination['pageNumber'], this.pagination['recordsPerPage'], 'in').subscribe(
		  (newsList: News) => {
			  this.pagination['totalItems'] = newsList.totalResults;
			  this.newsList = newsList;
			  console.log(this.pagination);
			  this.generatePagination();
			},
		  (err) => console.error(err)
	  )
  }

	generatePagination(){
		this.paginationButtonList.length = this.pagination['totalItems'] / this.pagination['recordsPerPage'];
	}

	changePage(index) {
		this.pagination['pageNumber'] = index+1;
		this.getNews('');
	}
}
