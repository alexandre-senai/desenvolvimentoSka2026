export abstract class Funcionario {
  public nome: string = "";
  protected salario: number = 0;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  //altere a classe Funcionario para uma
  //  classe abstrata de ganharAumento 

  abstract ferias(dias:number):string;

  falar() {
    console.log(
      "ola me chamo: " + this.nome + " meu salario e " + this.salario,
    );
  }

  getSalario(){
    return this.salario;
  }

  setSalario(valor:number){
    this.salario = valor;
  }


}
