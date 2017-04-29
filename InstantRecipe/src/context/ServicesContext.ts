import {
    TagService
} from '../services';

import { Logger } from '../core/logger';
const log = Logger('app:context:ServicesContext');


export class ServicesContext {

    static instance: ServicesContext;

    
    private tagService: TagService;

    static getInstance(): ServicesContext {
        if (!ServicesContext.instance) {
            ServicesContext.instance = new ServicesContext();
        }
        return ServicesContext.instance;
    }

   
    public get TagService(): TagService {
        return this.tagService;
    }

    public setTagService(tagService: TagService): ServicesContext {
        this.tagService = tagService;
        log.debug('setTagService');
        return this;
    }

}
