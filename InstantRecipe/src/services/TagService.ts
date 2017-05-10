import { TagRepository } from '../repositories';
import { TagModel } from '../models/TagModel';
import { Logger } from '../core/logger';



export class TagService {

    private log =  Logger('app:service:TagService');

    constructor(private tagRepository: TagRepository) {
    }

    public async findAll(): Promise<TagModel[]> {
        this.log.debug('findAll called');
        const results = await this.tagRepository.findAll();
        this.log.debug(results);
        return results;
    }

   

    

    //public async search(text: string): Promise<TagModel[]> {
    //    this.log.debug('search called with text=', text);
    //    const results = await this.tagRepository.search(text);
    //    return results.map((result) => new TagModel(result));
    //}

}
