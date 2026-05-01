import { Personagem } from "./Personagem.ts";

export class Guerreiro extends Personagem {
  constructor(nome: string, forca: number, vida: number) {
    super(nome, forca, vida, 100, 90, "https://i.imgur.com/CHcCtTE.png");
  }

  public atacar(persona: Personagem): void {
    let dado = this.gerarAtaque();
    let ataque = 0;

    switch (dado) {
      case 1:
        console.log(`${this.nome} ataca com um machado o: ${persona.nome}`);
        ataque = 15;
        break;

      case 2:
        console.log(`${this.nome} ataca com um punhos o: ${persona.nome}`);
        ataque = 20;
        break;

      case 3:
        console.log(`${this.nome} ataca jogando uma pedra no: ${persona.nome}`);
        ataque = 30;
        break;

      default:
        console.log(`${this.nome} ataca com a espada: ${persona.nome}`);
        break;
    }
    
    persona.sofrerAtaque(this.forca + ataque);
  }
}
