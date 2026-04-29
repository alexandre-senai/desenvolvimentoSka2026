import { Guerreiro } from "./Guerreiro.ts";
import { Jogo } from "./Jogo.ts";
import { Mago } from "./Mago.ts";

let mago:Mago = new Mago("Mago", 120, 200);
let guerreiro:Guerreiro= new Guerreiro("Guerreiro", 100, 300);

let jogo:Jogo = new Jogo();
jogo.inicia(mago, guerreiro);