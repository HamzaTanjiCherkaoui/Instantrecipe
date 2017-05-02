import * as DataLoader from 'dataloader';

import { TagService, RecipeService, IngredientService} from '../services';

import { Logger } from '../core/logger';
const log = Logger('app:context:DataLoadersContext');


export class DataLoadersContext {

    static instance: DataLoadersContext;

    private tagDataLoader: DataLoader<number, any>;
    private recipeDataLoader: DataLoader<number, any>;
    private ingredientDataloader: DataLoader<number, any>;

    static getInstance(): DataLoadersContext {
        if (!DataLoadersContext.instance) {
            DataLoadersContext.instance = new DataLoadersContext();
        }
        return DataLoadersContext.instance;
    }

    

    public get TagDataLoader(): DataLoader<number, any> {
        return this.tagDataLoader;
    }

    public get RecipeDataLoader(): DataLoader<number, any> {
        return this.recipeDataLoader;
    }

    public get IngredientDataLoader(): DataLoader<number, any> {
        return this.ingredientDataloader;
    }

    public setTagDataLoader(tagService: TagService): DataLoadersContext{
        this.tagDataLoader = new DataLoader(
            async (ids:number[]) => {

                const tags = await tagService.findByIds(ids);
                return tags.map(t => t.toJson());
            }

        );
        log.debug('setTagDataLoader');
        return this;
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

    public setIngredientDataLoader(ingredientService: IngredientService): DataLoadersContext {
        this.ingredientDataloader = new DataLoader(
            async (ids: number[]) => {

                const ingredients = await ingredientService.findByIds(ids);
                return ingredients.map(t => t.toJson());
            }

        );
        log.debug('setRecipeDataLoader');
        return this;
    }

}
