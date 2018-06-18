import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-list/news-item/news-item.component';
import { NewsService } from './services/news.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NewsListComponent,
    NewsItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
