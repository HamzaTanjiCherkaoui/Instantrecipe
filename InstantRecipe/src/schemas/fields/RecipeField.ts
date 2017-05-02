import { GraphQLFieldDefinition, GraphQLString, GraphQLID, GraphQLList, GraphQLObjectType} from 'graphql';
import { AbstractField, IGraphQLField } from './AbstractField';
import { Logger } from '../../core';
import { Context } from '../../context';
import { models } from 'models';
import  {Tag} from './TagField';
import {Ingredient} from './IngredientsField';


export const RecipeType = new GraphQLObjectType({
    name: 'Recipe',
    description: 'Recipe Details',
    fields: () => ({
        id: new IdField(),
        name: new NameField(),
        ingredients: new IngredientsField(),
        tags: new TagsField(),
        steps: new StepsField()
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

export class IngredientsField implements GraphQLFieldDefinition {

    public type = new GraphQLList(Ingredient.IngredientType);
    public name = 'Ingredient';
    public description = 'ingredients associated with this recipe';
    public args;

}

export class TagsField implements GraphQLFieldDefinition {

    public type = new GraphQLList(Tag.TagType);
    public name = 'Tag';
    public description = 'tag associated with this recipe';
    public args;

}

export class StepsField implements GraphQLFieldDefinition {

    public type = new GraphQLList(GraphQLString);
    public name = 'Steps';
    public description = 'steps associated with this recipe';
    public args;

}



export class RecipeField extends AbstractField implements GraphQLFieldDefinition, IGraphQLField {



    public log = Logger('app:schemas:author:TagField');

    public type = RecipeType;
    public name = 'Tag';
    public description = 'Tags associated with recipe';
    public args;

    public execute(source: any, args: any, context: Context<any>): Promise<models.tag.Attributes>
    public execute(source: any, args: any, context: Context<any>): Promise<models.tag.Attributes> {
        this.log.debug('Resolve Tags' + source.id);


        return context.DataLoaders.RecipeDataLoader.load(source.id);


    }
}



