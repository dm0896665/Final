import { IShow } from './show';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class ShowService
{
  constructor(private http:HttpClient){}

  showUrl = "https://api.themoviedb.org/3/tv/popular?api_key=1c2d9d1761bb7d150a6dcbfd7ee6041c&language=en-US&page=1";
  getShows(): Observable<IShow[]>
  {
    return this.http.get<IShow[]>(this.showUrl);
  }
}