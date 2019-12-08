import { IMovie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class MovieService
{
  constructor(private http:HttpClient){}

  MovieUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=1c2d9d1761bb7d150a6dcbfd7ee6041c&language=en-US&page=1";
  getMovies(): Observable<IMovie[]>
  {
    return this.http.get<IMovie[]>(this.MovieUrl);
  }
}