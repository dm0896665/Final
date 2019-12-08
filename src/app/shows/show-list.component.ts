import { Component } from '@angular/core';
import { IShow } from './show';
import { ThrowStmt } from '@angular/compiler';
import { ShowService } from './show.service';

@Component ({
    selector: "pm-shows",
    templateUrl: "./show-list.component.html"
})

export class ShowListComponent {
    shows: IShow[]= [];

    constructor(private showService: ShowService)
    {
    };

    ngOnInit(): void 
    {
      this.showService.getShows().subscribe({
        next: prodObserved => {
          this.shows = prodObserved;
        }
      });
    }

}