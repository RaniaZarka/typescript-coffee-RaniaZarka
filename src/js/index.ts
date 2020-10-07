import { Coffee } from "./coffee";
import { Imilk } from "./Imilk";
import { Cortado } from "./Cortado";
import { Latte } from "./Latte";


let cort = new Cortado;

console.log( "Price " +cort.Price());
console.log( "Strenght " +cort.Strenght());
console.log("Milk amount " +cort.MImilk());

let latte = new Latte;
console.log( "Price " + latte.Price());
console.log( "Strenght " + latte.Strenght());
console.log("Milk amount " + latte.MImilk());