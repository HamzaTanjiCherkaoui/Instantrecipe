import { RecipeRepository } from '../repositories';
import { Logger } from '../core/logger';



export class RecipeService {

    private log = Logger('app:service:RecipeService');

    constructor(private recipeRepository: RecipeRepository) {
    }

    

    public async findByIds(ids: any[]): Promise<any> {
        this.log.debug('findByIds called with ids=', ids);
        return await this.recipeRepository.findRecipeByIds(ids);
    }

    public async findById(id: any): Promise<any> {
        this.log.debug('findById called with id=', id);
        return await this.recipeRepository.findRecipeById(id); 
        
    }


}
