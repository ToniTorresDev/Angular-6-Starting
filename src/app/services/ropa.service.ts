import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
  public nombre_prenda = 'Pantalones Vaqueros';
  public coleccion_ropa = ['Pantalones Blancos','Camiseta roja']

  prueba(nombrePrenda){
    return nombrePrenda;
  }

  addRopa(nombrePrenda:string):Array<string>{
    this.coleccion_ropa.push(nombrePrenda);
    return this.getRopa();
  }

  getRopa():Array<string>{
    return this.coleccion_ropa;
  }

  eliminarPrenda(prenda:number){
    this.coleccion_ropa.splice(prenda, prenda);

    return this.getRopa();
  }


}
