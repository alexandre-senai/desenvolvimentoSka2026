export class Aluno {
  readonly nome: string = "";
  public idade: number = 0;
  private nota: number = 0;

  // Na classe Aluno altere o nome para readonly
  // Na classe Aluno altera a nota para private
  // Crie um metodo alterar nota em Aluno;

  constructor(idade: number, nomeTeste: string) {
    this.idade = idade;
    this.nome = nomeTeste; //maria
  }

  getNota(){
    return this.nota;
  }

  setNota(notaParametro: number) {
    if (notaParametro > 10 || notaParametro < 0) {
      console.log("erro");
      this.nota = 0;
      
    } else {
      this.nota = notaParametro;
    }
  }

  falar() {
    console.log(
      `minha nota é: ${this.nota} meu nome e: ${this.nome} minha idade e ${this.idade}`,
    );
  }
}