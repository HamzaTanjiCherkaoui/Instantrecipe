import * as DataLoader from 'dataloader';

import {  RecipeService} from '../services';

import { Logger } from '../core/logger';
const log = Logger('app:context:DataLoadersContext');


export class DataLoadersContext {

    static instance: DataLoadersContext;

    
    private recipeDataLoader: DataLoader<number, any>;
   
    static getInstance(): DataLoadersContext {
        if (!DataLoadersContext.instance) {
            DataLoadersContext.instance = new DataLoadersContext();
        }
        return DataLoadersContext.instance;
    }

    

   

    public get RecipeDataLoader(): DataLoader<number, any> {
        return this.recipeDataLoader;
    }

   

    


    public setRecipeDataLoader(recipeService: RecipeService): DataLoadersContext {
        this.recipeDataLoader = new DataLoader(
            async (ids: number[]) => {

                const recipes = await recipeService.findByIds(ids);
                return recipes.map(t => t.toJson());
            }

        );
        log.debug('setRecipeDataLoader');
        return this;
    }
}
