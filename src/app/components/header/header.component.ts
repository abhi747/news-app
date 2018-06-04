import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    categoryList = ['business','entertainment','general','health','science','sports','technology'];
    constructor(private service: NewsService) { }

  ngOnInit() {
  }

    changeCategory(cat: string) {
        this.service.changeCategory(cat);
    }

}
