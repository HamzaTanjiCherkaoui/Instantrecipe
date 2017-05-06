import {  GraphQLFieldConfig, GraphQLID} from 'graphql';

import { models } from 'models';
import { Logger } from '../../core';
import { RootValue } from '../../RootValue';
import { Context } from '../../context';
import { RecipeType } from '../fields';
import { AbstractQuery, IGraphQLQuery } from './AbstractQuery';


export class FindRecipeByIdQuery extends AbstractQuery implements GraphQLFieldConfig, IGraphQLQuery {

    public log = Logger('app:schemas:tag:FindRecipeById');

    public type = RecipeType;
    public allow = ['admin'];
    public args = {
        id: { type: GraphQLID }
    };

    public before(context: Context<arguments.ID>, args: arguments.ID): Promise<arguments.ID> {
        this.log.debug('hook before args', args);
        return Promise.resolve(args);
    }

    public async execute(root: RootValue, args: any, context: Context<arguments.ID>): Promise<any[]> {
        this.log.debug('resolve FindRecipeByIdQuery(%s)', args.id);

        const tag = await context.Services.RecipeService.findById(args.id);
        this.log.debug('result FindRecipeByIdQuery complete');
        return tag;
    }

    public after(result: models.tag.Attributes, context: Context<arguments.ID>, args: arguments.ID): Promise<models.tag.Attributes> {
        this.log.debug('hook after args', args);
        return Promise.resolve(result);
    }

}
