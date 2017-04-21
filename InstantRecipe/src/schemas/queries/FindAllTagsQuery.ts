import {  GraphQLFieldConfig } from 'graphql';

import { models } from 'models';
import { Logger } from '../../core';
import { RootValue } from '../../RootValue';
import { Context } from '../../context';
import { TagType } from '../fields';
import { AbstractQuery, IGraphQLQuery } from './AbstractQuery';


export class FindAllTagsQuery extends AbstractQuery implements GraphQLFieldConfig, IGraphQLQuery {

    public log = Logger('app:schemas:tag:FindTagById');

    public type = TagType;
    public allow = ['admin'];
    public args = {
        
    };

    public before(context: Context<arguments.ID>, args: arguments.ID): Promise<arguments.ID> {
        this.log.debug('hook before args', args);
        return Promise.resolve(args);
    }

    public async execute(root: RootValue, args: any, context: Context<arguments.ID>): Promise<any[]> {
        this.log.debug('resolve FindTagByIdQuery(%s)', args.id);
        const tag = await context.Services.TagService.findAll();
        this.log.debug('result FindTagByIdQuery(%s)', tag);
        return tag;
    }

    public after(result: models.book.Attributes, context: Context<arguments.ID>, args: arguments.ID): Promise<models.book.Attributes> {
        this.log.debug('hook after args', args);
        return Promise.resolve(result);
    }

}
