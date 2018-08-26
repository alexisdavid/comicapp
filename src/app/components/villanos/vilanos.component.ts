import { Component, OnInit } from '@angular/core';
import { HeroesService, Villanos } from '../../servicios/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-vilanos',
  templateUrl: './vilanos.component.html'
})
export class VilanosComponent implements OnInit {

  Villanos:Villanos[] = [];

  constructor(private _villanoService:HeroesService ,
              private router:Router) { }

  ngOnInit() {
    this.Villanos = this._villanoService.getVillano();
    console.log(this.Villanos);
    
  }

 info(idx:number){
    console.log(idx);
    this.router.navigate(['/villano',idx]);
  
    }

}
