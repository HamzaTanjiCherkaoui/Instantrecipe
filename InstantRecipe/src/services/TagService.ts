import { TagRepository } from '../repositories';
import { TagModel } from '../models/TagModel';
import { Logger } from '../core/logger';
import { NotFoundException } from '../exceptions';


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

    public async findByIds(ids: any[]): Promise<any> {
        this.log.debug('findByIds called with ids=', ids);
        const results = await this.tagRepository.findByIds(ids);
        return new TagModel(results, true);
    }

    public async findById(id: any): Promise<any> {
        this.log.debug('findById called with id=', id);
        const result = await this.tagRepository.findById(id);
        if (result === null) {
            throw new NotFoundException(id);
        }
        return new TagModel(result, true);
    }

    

    //public async search(text: string): Promise<TagModel[]> {
    //    this.log.debug('search called with text=', text);
    //    const results = await this.tagRepository.search(text);
    //    return results.map((result) => new TagModel(result));
    //}

}
