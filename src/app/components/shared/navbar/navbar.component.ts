import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
   buscarHeroe(termino:string){
    //  mueveme a buscar y manda el termino (es lo que mande como parametro desde el html)de la busqueda
     this.router.navigate(['/buscar', termino])
     
   }
}
  