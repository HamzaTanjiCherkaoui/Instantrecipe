import { GraphQLFieldDefinition, GraphQLString, GraphQLID, GraphQLList, GraphQLObjectType} from 'graphql';




export namespace Tag {

    export const TagType = new GraphQLObjectType({
        name: 'Tag',
        description: 'Tags for receipes',
        fields: () => ({
            id: new IdField(),
            name: new NameField(),
            recipeIds: new RecipeIdsField()
        })
    });

    export class IdField implements GraphQLFieldDefinition {

        public type = GraphQLID;
        public name = 'Id';
        public description = 'Id for tag';
        public args;

    }

    export class NameField implements GraphQLFieldDefinition {

        public type = GraphQLString;
        public name = 'Tag name';
        public description = 'Name for tag';
        public args;

    }

    export class RecipeIdsField implements GraphQLFieldDefinition {

        public type = new GraphQLList(GraphQLID);
        public name = 'Receipe Id';
        public description = 'List of receipes associated with this category';
        public args;

    }


}



