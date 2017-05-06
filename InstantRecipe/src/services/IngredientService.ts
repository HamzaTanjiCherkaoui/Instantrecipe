import { IngredientRepository } from '../repositories';
import { Logger } from '../core/logger';



export class IngredientService {

    private log = Logger('app:service:IngredientService');

    constructor(private ingredientRepository: IngredientRepository) {
    }



    public async findByIds(ids: any[]): Promise<any> {
        this.log.debug('findByIds called with ids=', ids);
        return await this.ingredientRepository.findIngredientsByIds(ids);
    }

    public async findById(id: any): Promise<any> {
        this.log.debug('findById called with id=', id);
        return await this.ingredientRepository.findIngredientsById(id);

    }


}
