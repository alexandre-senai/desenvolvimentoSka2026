export abstract class Personagem {
  public nome: string = "personagem";
  protected forca: number = 0;
  protected vida: number = 0;
  protected cura: number = 0;
  protected defesa:number = 0;
  protected imagem:string = "";

  private jaUsouCura:boolean = false;

  constructor(nome: string, forca: number, vida: number, cura:number, defesa:number, 
    imagem:string) {
    this.nome = nome;
    this.forca = forca;
    this.vida = vida;
    this.cura = cura;
    this.defesa = defesa;
    this.imagem = imagem;
  }

  isContinuaVivo(): boolean {
    return this.vida > 0;
  }

  sofrerAtaque(dano: number): void {
    let danoReal = dano - ( dano * (this.defesa / 100) );

    this.vida = this.vida - danoReal;

    console.log(
      `${this.nome} recebeu ${danoReal} de dano. vida atual: ${this.vida}`,
    );

    this.usarCura();
  }

  getVida(){
    return this.vida;
  }

  getImg(){
    return this.imagem;
  }

  usarCura(): void {
    if (this.vida <= 50 && !this.jaUsouCura) {
      this.vida = this.vida + this.cura;
      this.jaUsouCura = true;
      console.log(
      `${this.nome} recebeu ${this.cura} de cura. vida atual: ${this.vida}`,
    );
    }
  }

  gerarAtaque(): number {
    let maximoAtk = 3;
    return Math.floor(Math.random() * maximoAtk);
  }

  public abstract atacar(persona: Personagem): void;
}

// ATIVIDADE CRIAR DOIS PERSONAGEM QUE EXTENDE DA CLASSE PERSONAGEM
// CRIAR UM CONSTRUTOR E O METODO ATACAR
