import { Guerreiro } from "./Guerreiro.ts";
import { Mago } from "./Mago.ts";
import { Personagem } from "./Personagem.ts";

export class Jogo {
  public async inicia(player1: Personagem, player2: Personagem) {
    let turno = 1;

    this.atualizarInterface(player1, player2);

    while (player1.isContinuaVivo() && player2.isContinuaVivo) {
      player1.log("\n ============== TURNO " + turno + " ==========");
      player1.atacar(player2);
      this.atualizarInterface(player1, player2);
      await this.esperaTempo();

      if (!player2.isContinuaVivo()) {
        break;
      }

      player2.atacar(player1);
      this.atualizarInterface(player1, player2);
      await this.esperaTempo();

      turno += 1;
    }

    if (player1.isContinuaVivo()) {
      player1.log(`${player1.nome} ganhou a luta.`);
    } else {
      player1.log(`${player2.nome} ganhou a luta.`);
    }
  }

  buscaComponenteHtml(id: string) {
    return document.getElementById(id);
  }

 getPath():string{
  return "C:\\Users\\Aluno\\Documents\\alexandre\\desenvolvimentoSka2026\\html\\game\\src\\images\\";
 }

  public atualizarInterface(jogadorUm: Personagem, jogadorDois: Personagem) {
    (document.getElementById("imgJogadorUm") as HTMLImageElement).src =
      this.getPath() + jogadorUm.getImg();

    (document.getElementById("imgJogadorDois") as HTMLImageElement).src =
     this.getPath() +  jogadorDois.getImg();

    this.buscaComponenteHtml("nomeUm")!.textContent = jogadorUm.nome;
    this.buscaComponenteHtml("nomeDois")!.textContent = jogadorDois.nome;

    this.buscaComponenteHtml("jogadorUmVida")!.textContent =
      "HP: " + jogadorUm.getVida();
    this.buscaComponenteHtml("jogadorDoisVida")!.textContent =
      "HP: " + jogadorDois.getVida();
  }

  public esperaTempo() {
    const milesegundos = 800;
    return new Promise((x) => setTimeout(x, milesegundos));
  }
}

function construirJogo() {
  let mago: Mago = new Mago("Mago", 120, 200);
  let guerreiro: Guerreiro = new Guerreiro("Guerreiro", 100, 300);

  let jogo: Jogo = new Jogo();
  jogo.inicia(mago, guerreiro);
}

document.getElementById("botaoJogar")!.addEventListener("click", construirJogo);
