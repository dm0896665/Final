import { Component } from '@angular/core';
import { IShow } from '../shows/show';
import { IMovie } from '../movies/movie';
import { ThrowStmt } from '@angular/compiler';
import { MovieService } from '../movies/movie.service';
import { ShowService } from '../shows/show.service';

@Component ({
    selector: "pm-moviesnshows",
    templateUrl: "./moviesnshows-list.component.html",
    styleUrls: ['./moviesnshows.component.css']
})

export class moviesnshowsComponent {
    shows: IShow[]= [];
    movies: IMovie[]= [];

    constructor(private showService: ShowService, private movieService: MovieService)
    {
    };

    ngOnInit(): void 
    {
      this.movieService.getMovies().subscribe({
        next: movieObserved => {
          this.movies = movieObserved;
        }
      });
      this.showService.getShows().subscribe({
        next: showObserved => {
          this.shows = showObserved;
        }
      });
    }

}