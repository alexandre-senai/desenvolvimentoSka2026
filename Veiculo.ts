export class Veiculo {
  public marca: string;
  protected velocidade: number = 0;

  constructor(marca: string, velocidade: number) {
    this.marca = marca;
    this.velocidade = velocidade;
  }

  acelerar(velocidade: number) {
    this.velocidade += velocidade;
  }

  exibir() {
    console.log("marca" + this.marca + " " + this.velocidade + "km/h");
  }
}


// Crie uma classe Funcionario com atributos public nome, 
// protected salario
// metodos get setter, falar

// Crie uma Classe Gerente, extends funcionario, 
// com atributos public cargo
// metodo  mandarAlguem