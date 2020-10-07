export abstract  class  Coffee{

    discount: number;
    name: string;

    abstract Price():number;

    Strenght(): string {
       return "Mild";}

    abstract CoffeeDrink(): string
    
       constructor ( discount?: number)
       {
           if(discount==void 0){ discount=0}
           this.discount = discount;
       }
    }




