import { Veiculo } from "./Veiculo.ts";

export class Carro extends Veiculo{
  public ano:number = 0;

  buzinar(){
    this.velocidade = 10;
  }
  
 
}
