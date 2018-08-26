
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routes

import { APP_ROUTING } from './app.routes';

// Services
import { HeroesService } from './servicios/heroes.service'

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { Routes } from '@angular/router';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';
import { VilanosComponent } from './components/villanos/vilanos.component';
import { VillanoComponent } from './components/villano/villano.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarHeroeComponent,
    VilanosComponent,
    VillanoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
