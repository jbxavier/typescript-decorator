import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

// Modelo<T>, esse T será passado automaticamente ao Comparavel<T> 
// quando implementado Modelo<T>
export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}