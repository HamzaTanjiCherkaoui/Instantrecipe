import {
    AuthorService,
    BookService,
    TagService
} from '../services';

import { Logger } from '../core/logger';
const log = Logger('app:context:ServicesContext');


export class ServicesContext {

    static instance: ServicesContext;

    private authorService: AuthorService;
    private bookService: BookService;
    private tagService: TagService;

    static getInstance(): ServicesContext {
        if (!ServicesContext.instance) {
            ServicesContext.instance = new ServicesContext();
        }
        return ServicesContext.instance;
    }

    public get AuthorService(): AuthorService {
        return this.authorService;
    }

    public get BookService(): BookService {
        return this.bookService;
    }

    public get TagService(): TagService {
        return this.tagService;
    }

    public setAuthorService(authorService: AuthorService): ServicesContext {
        this.authorService = authorService;
        log.debug('setAuthorService');
        return this;
    }

    public setBookService(bookService: BookService): ServicesContext {
        this.bookService = bookService;
        log.debug('setBookService');
        return this;
    }

    public setTagService(tagService: TagService): ServicesContext {
        this.tagService = tagService;
        log.debug('setTagService');
        return this;
    }

}
