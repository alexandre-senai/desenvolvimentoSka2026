import { Personagem } from "./Personagem.ts";

export class Mago extends Personagem {
  constructor(nome: string, forca: number, vida: number) {
    super(nome, forca, vida, 200, 20,  "https://i.imgur.com/CHcCtTE.png");
  }

  public atacar(persona: Personagem): void {
    console.log(`${this.nome} ataca com uma bola de fogo : ${persona.nome}`);
    persona.sofrerAtaque(this.forca);
  }
}
