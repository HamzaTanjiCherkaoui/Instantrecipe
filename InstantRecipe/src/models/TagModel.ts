import { models } from 'models';
import { AbstactModel } from './AbstactModel';


export class TagModel implements AbstactModel<models.tag.Attributes, models.tag.RawAttributes> {
    id?: any;
    name?: string;
    receipeIds?: any[];

    constructor(attributes?: models.tag.Attributes | models.tag.RawAttributes, isRaw: boolean = true) {
        if (attributes) {
            if (isRaw) {
                this.mapDatabaseObject(<models.tag.RawAttributes>attributes);
            } else {
                this.mapJson(<models.tag.Attributes>attributes);
            }
        }
    }

    public setId(id: number): TagModel {
        this.id = id;
        return this;
    };

    public setName(name: string): TagModel {
        this.name = name;
        return this;
    };

    public setRecipeIds(ids: any []): TagModel {
        this.name = name;
        return this;
    };

    public mapJson(attributes: models.tag.Attributes): TagModel {
        if (attributes !== undefined) {
            this.setId(attributes.id);
            this.setName(attributes.name);
            this.setRecipeIds(attributes.receipeIds);  
        }
        return this;
    }

    public mapDatabaseObject(attributes: models.tag.RawAttributes): TagModel {
        if (attributes !== undefined) {
            this.setId(attributes._id);
            this.setName(attributes.name);
            this.setRecipeIds(attributes.receipeIds);
        }
        return this;
    }

    public toJson(): Tag {
        return new Tag(this);
    }

    public toDatabaseObject(): RawTag {
        return new RawTag(this);
    }
}

export class Tag implements models.tag.Attributes {
    id: any;
    name: string;
    receipeIds: any[];
    constructor(builder: TagModel) {
        this.id = builder.id;
        this.name = builder.name;
        this.receipeIds = builder.receipeIds;
    }
}
export class RawTag implements models.tag.RawAttributes {
    _id: any;
    name: string;
    receipeIds: any[];

    constructor(builder: TagModel) {
        this._id = builder.id;
        this.name = builder.name;
        this.receipeIds = builder.receipeIds;
    }
}
