import {MongoClient, ObjectID} from 'mongodb';
import { Logger } from '../core/logger';
import { IngredientModel } from '../models';
import * as _ from 'lodash';

export class IngredientRepository {

    private log = Logger('app:service:RecipeRepository');

    public async findIngredientsById(ingrId: any) {
        let db = await MongoClient.connect('mongodb://localhost:27017/instantrecipe-dev');

        this.log.debug("findIngredientsById");

        let ingredient = await db.collection("ingredient").findOne({ _id: new ObjectID(ingrId) });
        return IngredientModel.ConvertToDomainModel(ingredient);
    }

    public async findIngredientsByIds(ingrIds: any[]) {
        let db = await MongoClient.connect('mongodb://localhost:27017/instantrecipe-dev');

        this.log.debug("findIngredientsByIds");

        let IngredientsObjIds: any[] = _.map(ingrIds, (ingrId) => { new ObjectID(ingrId) });
        let ingredients = await db.collection("ingredient").find({
            '_id': {
                $in: IngredientsObjIds
            }
        }).toArray();
        return ingredients.map((ingr) => { return IngredientModel.ConvertToDomainModel(ingr); });
    }

}