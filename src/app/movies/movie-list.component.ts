import { Component } from '@angular/core';
import { IMovie } from './movie';
import { ThrowStmt } from '@angular/compiler';
import { MovieService } from './movie.service';

@Component ({
    selector: "pm-movies",
    templateUrl: "./movie-list.component.html"
})

export class MovieListComponent {
    movies: IMovie[]= [];

    constructor(private movieService: MovieService)
    {
    };

    ngOnInit(): void 
    {
      this.movieService.getMovies().subscribe({
        next: prodObserved => {
          this.movies = prodObserved;
        }
      });
    }

}