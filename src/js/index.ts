
import { Cortado } from "./Cortado";
import { Latte } from "./Latte";
import { BlackCoffee } from "./BlackCoffee";


let cort = new Cortado;
console.log(cort.CoffeeDrink());
console.log( "Price: " +cort.Price());
console.log( "Strenght: " +cort.Strenght());
console.log("Milk amount: " +cort.MImilk());
console.log("Discount: " + cort.discount);

let latte = new Latte;
console.log(latte.CoffeeDrink());
console.log( "Price: " + latte.Price());
console.log( "Strenght: " + latte.Strenght());
console.log("Milk amount: " + latte.MImilk());
console.log("Discount: " + latte.discount);

let black = new BlackCoffee;
console.log(black.CoffeeDrink());
console.log( "Price: " + black.Price());
console.log( "Strenght: " + black.Strenght());
console.log("Discount: " + black.discount);


let discountedBlack = new BlackCoffee(4);
console.log(discountedBlack.CoffeeDrink());
console.log( "Price: " + discountedBlack.Price());
console.log( "Strenght: " + discountedBlack.Strenght());
console.log("Discount: " + discountedBlack.discount);

