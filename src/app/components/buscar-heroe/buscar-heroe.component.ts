import { Component, OnInit } from '@angular/core';
// para los parametros de la url
import { ActivatedRoute } from '@angular/router';
// para los metodos del servicio
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})

export class BuscarHeroeComponent implements OnInit {
  heroes:any[]=[];
  termino:string;
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      // guada en la variable heroes lo que regrese el servicio
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
       this.termino = params['termino'];
      console.log(this.heroes);
      
    } )
 
  }
  verHeroe(term:string){
    
    console.log(term);
    

  }
  // vervillano(term:string){
  //   this.activatedRoute.params.subscribe( params =>{
  //     // guada en la variable heroes lo que regrese el servicio
  //     this.heroes=this._heroesService.buscarHeroes(params['termino']);
  //      this.termino = params['termino'];
  // console.log(term);
  
  // }

}
