import { GraphQLFieldDefinition, GraphQLString, GraphQLID, GraphQLList, GraphQLObjectType} from 'graphql';
import { AbstractField, IGraphQLField } from './AbstractField';
import { Logger } from '../../core';
import { Context } from '../../context';


export namespace ingredient {
    export const IngredientType = new GraphQLObjectType({
        name: 'Ingredients',
        description: 'ingredients for receipes',
        fields: () => ({
            id: new IdField(),
            name: new NameField(),
            recipeIds: new RecipeIdsField()
        })
    });

    export class IdField implements GraphQLFieldDefinition {

        public type = GraphQLID;
        public name = 'Id';
        public description = 'Id for Ingredient';
        public args;

    }

    export class NameField implements GraphQLFieldDefinition {

        public type = GraphQLString;
        public name = 'Ingredient name';
        public description = 'Name for ingredient';
        public args;

    }

    export class RecipeIdsField implements GraphQLFieldDefinition {

        public type = new GraphQLList(GraphQLID);
        public name = 'Receipe Id';
        public description = 'List of receipes associated with this ingreient';
        public args;

    }



    export class IngredientField extends AbstractField implements GraphQLFieldDefinition, IGraphQLField {



        public log = Logger('app:schemas:author:TagField');

        public type = IngredientType;
        public name = 'Ingredient';
        public description = 'Ingredients associated with recipe';
        public args;

        public execute(source: any, args: any, context: Context<any>): Promise<any>
        public execute(source: any, args: any, context: Context<any>): Promise<any> {
            this.log.debug('Resolve Tags' + source.id);


            return context.DataLoaders.IngredientDataLoader.load(source.id);


        }
    }

}

