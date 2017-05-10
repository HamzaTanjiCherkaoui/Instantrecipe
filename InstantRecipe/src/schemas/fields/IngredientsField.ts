import { GraphQLFieldDefinition ,GraphQLString, GraphQLID, GraphQLList, GraphQLObjectType} from 'graphql';




export namespace Ingredient {
    export const IngredientType = new GraphQLObjectType({
        name: 'Ingredients',
        description: 'ingredients for receipes',
        fields: () => ({
            id: new IdField(),
            name: new NameField(),
            quantity: new QuantityField()
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

    export class QuantityField implements GraphQLFieldDefinition {

        public type = GraphQLString;
        public name = 'Quantity';
        public description = 'Quanity in units for recipe';
        public args;

    }
}

