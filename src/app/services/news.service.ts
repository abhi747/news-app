import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../interfaces/news';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private _http: HttpClient ) { }

    getTopHeadLines(category: string, country: string): Observable<News> {
        const url = `https://newsapi.org/v2/top-headlines`;
        let headers = new HttpHeaders({'X-Api-Key': environment.apiKey});
        let params = new HttpParams().set('language', 'en')
                    .append('category', category)
                    .append('country', country);
        return this._http.get<News>(url, {headers: headers,params: params});
    }
    getCategorizedNews(): Observable<News> {
        const url = `https://newsapi.org/v2/everything`;
        let headers = new HttpHeaders({ 'X-Api-Key': environment.apiKey });
        let params = new HttpParams().set('language', 'en');
        return this._http.get<News>(url, { headers: headers, params: params });
    }
}
