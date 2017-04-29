import { GraphQLFieldDefinition, GraphQLString, GraphQLID, GraphQLList, GraphQLObjectType} from 'graphql';
import { AbstractField, IGraphQLField } from './AbstractField';
import { Logger } from '../../core';
import { Context } from '../../context';
import { models } from 'models';


export const TagType = new GraphQLObjectType({
    name: 'Tag',
    description: 'Tags for receipes',
    fields: () => ({
        id: new IdField(),
        Name: new NameField(),
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



export class TagField extends AbstractField implements GraphQLFieldDefinition, IGraphQLField {



    public log = Logger('app:schemas:author:TagField');

    public type = TagType;
    public name = 'Tag';
    public description = 'Tags associated with recipe';
    public args;

    public execute(source: any, args: any, context: Context<any>): Promise<models.tag.Attributes>
    public execute(source: any, args: any, context: Context<any>): Promise<models.tag.Attributes> {
        this.log.debug('Resolve Tags' + source.id);

        
        return context.DataLoaders.TagDataLoader.load(source.id);

        
    }
}



