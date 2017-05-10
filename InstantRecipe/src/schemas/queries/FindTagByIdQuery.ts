//import { GraphQLID, GraphQLFieldConfig } from 'graphql';

//import { models } from 'models';
//import { Logger } from '../../core';
//import { RootValue } from '../../RootValue';
//import { Context } from '../../context';
//import { Tag } from '../fields';
//import { AbstractQuery, IGraphQLQuery } from './AbstractQuery';


//export class FindTagByIdQuery extends AbstractQuery implements GraphQLFieldConfig, IGraphQLQuery {

//    public log = Logger('app:schemas:tag:FindTagById');

//    public type = Tag.TagType;
//    public allow = ['admin'];
//    public args = {
//        id: { type: GraphQLID }
//    };

//    public before(context: Context<arguments.ID>, args: arguments.ID): Promise<arguments.ID> {
//        this.log.debug('hook before args', args);
//        return Promise.resolve(args);
//    }

//    public async execute(root: RootValue, args: any, context: Context<arguments.ID>): Promise<any> {
//        this.log.debug('resolve FindTagByIdQuery(%s)', args.id);
//        const tag = await context.Services.TagService.findById(args.id);
//        this.log.debug(tag);
//        return tag;
//    }

//    public after(result: models.book.Attributes, context: Context<arguments.ID>, args: arguments.ID): Promise<models.book.Attributes> {
//        this.log.debug('hook after args', args);
//        return Promise.resolve(result);
//    }

//}
