import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interfaces/news';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

    @Output() categoryChangeListener = new EventEmitter();

  constructor( private _http: HttpClient ) { }

    getTopHeadLines(category: string, country: string, page: number): Observable<News> {
        const url = `https://newsapi.org/v2/top-headlines`;
        let headers = new HttpHeaders({'X-Api-Key': environment.apiKey});
        let params = new HttpParams().set('language', 'en')
                    .append('category', category)
                    .append('country', country)
                    .append('page', page.toString())
                    .append('pageSize', "7");
        return this._http.get<News>(url, {headers: headers,params: params});
    }
    getCategorizedNews(): Observable<News> {
        const url = `https://newsapi.org/v2/everything`;
        let headers = new HttpHeaders({ 'X-Api-Key': environment.apiKey });
        let params = new HttpParams().set('language', 'en');
        return this._http.get<News>(url, { headers: headers, params: params });
    }

    changeCategory(cat: string) {
        this.categoryChangeListener.emit({ category: cat});
    }
}
