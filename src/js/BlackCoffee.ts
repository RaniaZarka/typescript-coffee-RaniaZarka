import { Coffee } from "./coffee";
import { Imilk } from "./Imilk";

export class BlackCoffee  extends Coffee{

      name ="Black Coffee";
    
    Price(): number{
        return 20 -this.discount;
    }

    Strenght(): string{
        return "Strong";
    }

    CoffeeDrink(): string{
        return this.name;
    }
   
}