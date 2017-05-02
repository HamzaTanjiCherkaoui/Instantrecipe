export class RecipeModel {
    public static ConvertToDomainModel(rawRecipe: RawRecipe): DomainRecipe {

        return new DomainRecipe(rawRecipe);
    }

    public static ConvertToDbModel(domainRecipe: DomainRecipe): any{
        return new RawRecipe(domainRecipe);
    }
}

export class RawRecipe {

    constructor(domainRecipe: DomainRecipe) {

    }
    public _id: any;
    public name: string;
    public ingredients: any[];
    public tags: any[];
    public steps: any[];

}

export class DomainRecipe {

    constructor(recipe: RawRecipe) {
        this.id = recipe._id;
        this.name = recipe.name;
        this.ingredients = recipe.ingredients;
        this.steps = recipe.steps;
        this.tags = recipe.tags;
    }

    public id: any;
    public name: string;
    public ingredients: any[];
    public tags: any[];
    public steps: any[];

}