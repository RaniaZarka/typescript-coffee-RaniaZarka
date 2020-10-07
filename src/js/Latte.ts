import { Coffee } from "./coffee";
import { Imilk } from "./Imilk";

export class Latte  extends Coffee implements Imilk{

    name= "Latte";
    Price(): number{
        return 40 -this.discount;
    }

    Strenght(): string{
        return "Weak";
    }
    MImilk():number{
        return 120;
    }

    CoffeeDrink(): string{
        return this.name;
    }
}