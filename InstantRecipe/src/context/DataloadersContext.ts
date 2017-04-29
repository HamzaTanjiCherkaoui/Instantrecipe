import * as DataLoader from 'dataloader';

import { TagService} from '../services';

import { Logger } from '../core/logger';
const log = Logger('app:context:DataLoadersContext');


export class DataLoadersContext {

    static instance: DataLoadersContext;

    private tagDataLoader: DataLoader<number, any>;

    static getInstance(): DataLoadersContext {
        if (!DataLoadersContext.instance) {
            DataLoadersContext.instance = new DataLoadersContext();
        }
        return DataLoadersContext.instance;
    }

    

    public get TagDataLoader(): DataLoader<number, any> {
        return this.tagDataLoader;
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

}
