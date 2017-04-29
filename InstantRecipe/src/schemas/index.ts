import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { GraphQLErrorHandling } from '../core';
import {
    FindTagByIdQuery,
    FindAllTagsQuery
} from './queries';

export class Schema {

    private static instance: Schema;

    private rootQuery: GraphQLObjectType = new GraphQLObjectType({
        name: 'Query',
        fields: {
            findTagById: new FindTagByIdQuery(),
            findAllTag: new FindAllTagsQuery()
        }
    });

    //private rootMutation: GraphQLObjectType = new GraphQLObjectType({
    //    name: 'Mutation',
    //    fields: {
            
    //    }
    //});

    private schema: GraphQLSchema = new GraphQLSchema({
        query: this.rootQuery,
        //mutation: this.rootMutation
    });

    static get(): GraphQLSchema {
        if (!Schema.instance) {
            Schema.instance = new Schema();
            GraphQLErrorHandling.watch(Schema.instance.schema);
        }
        return Schema.instance.schema;
    }

}