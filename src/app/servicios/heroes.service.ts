
import {Injectable } from '@angular/core';

@Injectable()
export class HeroesService{

    private heroes:Heroe[]=[
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC",
          rol:"heroe"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC",
          rol:"heroe"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel",
          rol:"heroe"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel",
          rol:"heroe"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC",
          rol:"heroe"

        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel",
          rol:"heroe"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel",
          rol:"heroe"

        },
        {
          nombre: "Joker",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/joker.png",
          aparicion: "1941-11-01",
          casa:"DC",
          rol:"villano"
        },
        {
          nombre: "Darkseid",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/darkseid.png",
          aparicion: "1941-11-01",
          casa:"DC",
          rol:"villano"
        },
        {
          nombre: "Thanos",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/thanos.png",
          aparicion: "1941-11-01",
          casa: "Marvel",
          rol:"villano"
        },
        {
          nombre: "Loki",
          bio: "Odín, llevó a los Asgardianos a la batalla contra los Gigantes de Escarcha y mató a Laufey, quien era el Rey, en combate personal. Odín encontró un pequeño niño del tamaño de Asgardiano escondido dentro de la fortaleza principal de los Gigantes de Escarcha. El niño era Loki y Laufey lo había mantenido oculto a su gente, Odín tomó al niño, por una combinación de lástima, para apaciguar a su padre, y porque él era el hijo de un digno adversario asesinado en un combate honorable, y lo crió como su hijo junto a su hijo biológico Thor.",
          img: "assets/img/loki.png",
          aparicion: "1941-11-01",
          casa:"Marvel",
          rol:"villano"
        },
        {
          nombre: "Ultron",
          bio: "Ultron fue construido por Hank Pym de los Vengadores, mientras el famoso científico y aventurero experimentaba con la robótica de alta inteligencia. Ultron se volvió sensible y se rebeló, hipnotizando a Pym y lavándole el cerebro para hacerle creer que Ultron nunca existió. Inmediatamente comenzó a mejorar su diseño rudimentario, actualizándose rápidamente varias veces para convertirse en Ultron-5. ",
          img: "assets/img/Ultron.png",
          aparicion: "1941-11-01",
          casa: "DC",
          rol:"villano"
        },
        {
          nombre: "chiquitin",
          bio: "Ultron fue construido por Hank Pym de los Vengadores, mientras el famoso científico y aventurero experimentaba con la robótica de alta inteligencia. Ultron se volvió sensible y se rebeló, hipnotizando a Pym y lavándole el cerebro para hacerle creer que Ultron nunca existió. Inmediatamente comenzó a mejorar su diseño rudimentario, actualizándose rápidamente varias veces para convertirse en Ultron-5. ",
          img: "assets/img/Ultron.png",
          aparicion: "1941-11-01",
          casa: "DC",
          rol:"villano"
        }
      
      ];

      private villanos:Villanos[]=[
        {
          nombre: "Joker",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/joker.png",
          
          casa:"DC",
         
        },
        {
          nombre: "Darkseid",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/darkseid.png",
       
          casa:"DC",
          
        },
        {
          nombre: "Thanos",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/thanos.png",
          
          casa: "Marvel",
          
        },
        {
          nombre: "Loki",
          bio: " Odín, llevó a los Asgardianos a la batalla contra los Gigantes de Escarcha y mató a Laufey, quien era el Rey, en combate personal. Odín encontró un pequeño niño del tamaño de Asgardiano escondido dentro de la fortaleza principal de los Gigantes de Escarcha. El niño era Loki y Laufey lo había mantenido oculto a su gente, Odín tomó al niño, por una combinación de lástima, para apaciguar a su padre, y porque él era el hijo de un digno adversario asesinado en un combate honorable, y lo crió como su hijo junto a su hijo biológico Thor.",
          img: "assets/img/loki.png",
          
          casa:"Marvel",
          
        },
        {
          nombre: "Ultron",
          bio: "Ultron fue construido por Hank Pym de los Vengadores, mientras el famoso científico y aventurero experimentaba con la robótica de alta inteligencia. Ultron se volvió sensible y se rebeló, hipnotizando a Pym y lavándole el cerebro para hacerle creer que Ultron nunca existió. Inmediatamente comenzó a mejorar su diseño rudimentario, actualizándose rápidamente varias veces para convertirse en Ultron-5. ",
          img: "assets/img/Ultron.png",
         
          casa: "DC",
          
        }
        
      ];


    constructor(){
      console.log("servicio listo para usarse");
        
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }
    getVillano():Villanos[]{
      
      return this.villanos;
  }
  getvillanodesc(idx: string){
    return this.villanos[idx];
  }


    getHeroe(idx: string){
      return this.heroes[idx];
    }

    buscarHeroes(termino:string):Heroe[]{
      
      let heroesArr:Heroe[] = [];
      termino = termino.toLowerCase();


      
         for (let heroe of this.heroes ){
        let nombre = heroe.nombre.toLowerCase();
        

        if( nombre.indexOf(termino) >= 0){
          heroesArr.push(heroe);

        }

      }
      return heroesArr;
    }
}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
    rol:string;
}

export interface Villanos{
    nombre:string;
    bio:string;
    img:string;
    casa:string;
}