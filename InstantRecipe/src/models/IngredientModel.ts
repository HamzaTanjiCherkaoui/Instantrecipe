export  class  IngredientModel {
    public static ConvertToDomainModel(rawIngr: RawIngredient): DomainIngredient {

        return new DomainIngredient(rawIngr);
    }

    public static ConvertToDbModel(domainIngr: DomainIngredient): any {
        return new RawIngredient(domainIngr);
    }
}

export class RawIngredient {

    constructor(domainIngredient: DomainIngredient) {

    }
    public _id: any;
    public name: string;
    public ingredients: any[];
    public recipeIds: any[];
    public Quantity: any;

}

export class DomainIngredient {

    constructor(recipe: RawIngredient) {
        this.id = recipe._id;
        this.name = recipe.name;
        this.recipeIds = recipe.recipeIds;
        this.quantity = recipe.Quantity;
    }

    public id: any;
    public name: string;
    public recipeIds: any[];
    public quantity: any;

}