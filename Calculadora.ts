export class Calculadora {
  resultado: number = 0;

  exibirResultado() {
    console.log("Resultado é " + this.resultado);
  }

  soma(a: number, b: number) {
    this.resultado = a + b;
  }

  divisao(a: number, b: number) {
    this.resultado = a / b;
  }

  multiplicar(a: number, b: number) {
    this.resultado = a * b;
  }

  subtracao(a: number, b: number) {
    this.resultado = a - b;
  }
}
