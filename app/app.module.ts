import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroService } from './service/HeroService';
import { HeroDetailComponent } from './component/hero-detail.component';
import { HeroesComponent } from './component/heroes.component';
import { DashboardComponent } from './component/dashboard.component';
import { AppRoutingModule } from './router/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroService,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

