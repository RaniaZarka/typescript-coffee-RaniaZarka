export abstract  class  Coffee{

    discount: number;

    abstract Price():number;

    Strenght(): string {
       return "Mild";}

       constructor ( discount?: number)
       {
           if(discount==void 0){ discount=0}
           this.discount = discount;
       }
    }




