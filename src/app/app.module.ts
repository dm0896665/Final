import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowListComponent } from './shows/show-list.component';
import { moviesnshowsComponent } from './moviesnshows/moviesnshows.component'


@NgModule({
  declarations: [
    AppComponent, MovieListComponent, WelcomeComponent, ShowListComponent, moviesnshowsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path:'movies', component: MovieListComponent},
      {path:'shows', component: ShowListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: "**", redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
