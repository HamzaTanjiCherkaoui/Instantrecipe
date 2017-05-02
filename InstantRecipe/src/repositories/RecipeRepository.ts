import {MongoClient, ObjectID} from 'mongodb';
import { Logger } from '../core/logger';
import { RecipeModel } from '../models';
import * as _ from 'lodash';

export class RecipeRepository {

    private log = Logger('app:service:RecipeRepository');

    public async findRecipeById(recipeId: any) {
        let db = await MongoClient.connect('mongodb://localhost:27017/instantrecipe-dev');

        this.log.debug("FindRecipeById");

        let recipe = await db.collection("recipe").findOne({ _id: new ObjectID(recipeId) });
        return RecipeModel.ConvertToDomainModel(recipe);
    }

    public async findRecipeByIds(recipeIds: any[]) {
        let db = await MongoClient.connect('mongodb://localhost:27017/instantrecipe-dev');

        this.log.debug("FindRecipeById");

          let recipeObjIds:any[] =_.map(recipeIds, (recipeId) => { new ObjectID(recipeId) });
          let recipe = await db.collection("recipe").find({
              '_id': {
                  $in: recipeObjIds
              }
          }).toArray();
          return recipe.map((rec) => { return RecipeModel.ConvertToDomainModel(rec);} );   
    }

}