import { Coffee } from "./coffee";
import { Imilk } from "./Imilk";


  export class Cortado  extends Coffee implements Imilk{

    name= "Cortado";

    Price(): number{
        return 25 -this.discount;
    }

    Strenght(): string{
        return "Weak";
    }
    MImilk():number{
        return 25;
    }
    CoffeeDrink(): string{
        return this.name;
    }
    
}
