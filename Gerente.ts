import { Funcionario } from "./Funcionario.ts";

export class Gerente extends Funcionario {
  public cargo: string = "gerente";

  constructor(cargo: string, nome: string, salario: number) {
    super(nome, salario); // Chama o constructor de funcionario
    this.cargo = cargo;
  }

  //implementacao da Classe abstrata de funcionario
  ferias(dias: number): string {
    if (dias > 40) {
      return "erro, dias invalidos";
    } 
      return "total de ferias " + dias;
  }

  mandarAlguem() {
    console.log("quero um relatorio ate o fim do dia");
  }

  //Sobrescreve o metodo falar de funcionario
  override falar() {
    console.log("EU GANHO MAIS QUE VOCÊ");
  }
}
