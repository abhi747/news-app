import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    categoryList = ['Business','Entertainment','General','Health','Science','Sports','Technology'];
    constructor(private _newService: NewsService) { }

  ngOnInit() {
  }

    changeCategory(cat: string) {
        this._newService.changeCategory(cat);
    }

}
