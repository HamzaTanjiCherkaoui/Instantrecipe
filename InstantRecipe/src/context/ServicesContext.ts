import {
    
    RecipeService
} from '../services';

import { Logger } from '../core/logger';
const log = Logger('app:context:ServicesContext');


export class ServicesContext {

    static instance: ServicesContext;

    
    
    private recipeService: RecipeService;
    static getInstance(): ServicesContext {
        if (!ServicesContext.instance) {
            ServicesContext.instance = new ServicesContext();
        }
        return ServicesContext.instance;
    }

   
   

    public get RecipeService(): RecipeService {
        return this.recipeService;
    }

    
    public setRecipeService(recipeService: RecipeService): ServicesContext {
        this.recipeService = recipeService;
        log.debug('setRecpeService');
        return this;
    }

}
