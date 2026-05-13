"use strict";
(() => {
  // src/Personagem.ts
  var Personagem = class {
    constructor(nome, forca, vida, cura, defesa, imagem) {
      this.nome = "personagem";
      this.forca = 0;
      this.vida = 0;
      this.cura = 0;
      this.defesa = 0;
      this.imagem = "";
      this.jaUsouCura = false;
      this.nome = nome;
      this.forca = forca;
      this.vida = vida;
      this.cura = cura;
      this.defesa = defesa;
      this.imagem = imagem;
    }
    isContinuaVivo() {
      return this.vida > 0;
    }
    sofrerAtaque(dano) {
      let danoReal = dano - dano * (this.defesa / 100);
      this.vida = this.vida - danoReal;
      this.log(`${this.nome} recebeu ${danoReal} de dano. vida atual: ${this.vida}`);
      this.usarCura();
    }
    getVida() {
      return this.vida;
    }
    getImg() {
      return this.imagem;
    }
    log(mensagem) {
      console.log(mensagem);
      document.getElementById("console").innerHTML += "<p>" + mensagem + "</p>";
    }
    usarCura() {
      if (this.vida <= 50 && !this.jaUsouCura) {
        this.vida = this.vida + this.cura;
        this.jaUsouCura = true;
        this.log(
          `${this.nome} recebeu ${this.cura} de cura. vida atual: ${this.vida}`
        );
      }
    }
    gerarAtaque() {
      let maximoAtk = 3;
      return Math.floor(Math.random() * maximoAtk);
    }
  };

  // src/Guerreiro.ts
  var Guerreiro = class extends Personagem {
    constructor(nome, forca, vida) {
      super(nome, forca, vida, 100, 90, "drago2.PNG");
    }
    atacar(persona) {
      let dado = this.gerarAtaque();
      let ataque = 0;
      switch (dado) {
        case 1:
          this.log(`${this.nome} ataca com um machado o: ${persona.nome}`);
          ataque = 15;
          break;
        case 2:
          this.log(`${this.nome} ataca com um punhos o: ${persona.nome}`);
          ataque = 20;
          break;
        case 3:
          this.log(`${this.nome} ataca jogando uma pedra no: ${persona.nome}`);
          ataque = 30;
          break;
        default:
          this.log(`${this.nome} ataca com a espada: ${persona.nome}`);
          break;
      }
      persona.sofrerAtaque(this.forca + ataque);
    }
  };

  // src/Mago.ts
  var Mago = class extends Personagem {
    constructor(nome, forca, vida) {
      super(nome, forca, vida, 200, 20, "drago1.PNG");
    }
    atacar(persona) {
      this.log(`${this.nome} ataca com uma bola de fogo : ${persona.nome}`);
      persona.sofrerAtaque(this.forca);
    }
  };

  // src/Jogo.ts
  var Jogo = class {
    async inicia(player1, player2) {
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
    buscaComponenteHtml(id) {
      return document.getElementById(id);
    }
    getPath() {
      return "C:\\Users\\Aluno\\Documents\\alexandre\\desenvolvimentoSka2026\\html\\game\\src\\images\\";
    }
    atualizarInterface(jogadorUm, jogadorDois) {
      document.getElementById("imgJogadorUm").src = this.getPath() + jogadorUm.getImg();
      document.getElementById("imgJogadorDois").src = this.getPath() + jogadorDois.getImg();
      this.buscaComponenteHtml("nomeUm").textContent = jogadorUm.nome;
      this.buscaComponenteHtml("nomeDois").textContent = jogadorDois.nome;
      this.buscaComponenteHtml("jogadorUmVida").textContent = "HP: " + jogadorUm.getVida();
      this.buscaComponenteHtml("jogadorDoisVida").textContent = "HP: " + jogadorDois.getVida();
    }
    esperaTempo() {
      const milesegundos = 800;
      return new Promise((x) => setTimeout(x, milesegundos));
    }
  };
  function construirJogo() {
    let mago = new Mago("Mago", 120, 200);
    let guerreiro = new Guerreiro("Guerreiro", 100, 300);
    let jogo = new Jogo();
    jogo.inicia(mago, guerreiro);
  }
  document.getElementById("botaoJogar").addEventListener("click", construirJogo);
})();
