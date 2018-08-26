import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Villanos } from '../../servicios/heroes.service';
@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styles: []
})
export class VillanoComponent implements OnInit {
  villano:any ={};
  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService ) { 
      this.activatedRoute.params.subscribe(params => {
      
        this.villano = this._heroesService.getvillanodesc(params['id'])
      })
    }

  ngOnInit() {
  }


}
