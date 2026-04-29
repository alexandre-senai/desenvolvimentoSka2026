import { Personagem } from "./Personagem.ts";

export class Mago extends Personagem {
  constructor(nome: string, forca: number, vida: number) {
    super(nome, forca, vida, 200, 20);
  }

  public atacar(persona: Personagem): void {
    console.log(`${this.nome} ataca com uma bola de fogo : ${persona.nome}`);
    persona.sofrerAtaque(this.forca);
  }
}
