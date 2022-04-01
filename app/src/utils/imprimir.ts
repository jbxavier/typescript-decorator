import { Imprimivel } from "./imprimivel.js";

// imprimir aceitará somente objetos que são imprimíveis (polimorfismo)
export function imprimir(...objetos: Array<Imprimivel>) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}