import {RawTag,TagModel} from './TagModel';
import {RawIngredient, IngredientModel} from './IngredientModel';
import * as _ from 'lodash';

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
    public ingredients: RawIngredient[];
    public tags: RawTag[];
    public steps: any[];

}

export class DomainRecipe {

    constructor(recipe: RawRecipe) {
        this.id = recipe._id;
        this.name = recipe.name;
        this.ingredients = _.map(recipe.ingredients,(igr)=>IngredientModel.ConvertToDomainModel(igr));
        this.steps = recipe.steps;
        this.tags = _.map(recipe.tags, (tag) => TagModel.ConvertToDomainModel(tag));
    }

    public id: any;
    public name: string;
    public ingredients: any[];
    public tags: any[];
    public steps: any[];

}