import { Coffee } from "./coffee";
import { Imilk } from "./Imilk";

export class BlackCoffee  extends Coffee{

    Price(): number{
        return 20 -this.discount;
    }

    Strenght(): string{
        return "Strong";
    }
   
}