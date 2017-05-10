import { Logger } from '../core/logger';


export class TagModel {
    public static ConvertToDomainModel(tag: RawTag): DomainTag {

        return new DomainTag(tag);
    }

    public static ConvertToDbModel(tag: DomainTag): any {
        return new RawTag(tag);
    }
}

export class RawTag {

    constructor(tag: DomainTag) {

    }
    public _id: any;
    public name: string;
}

export class DomainTag {
    private log = Logger('app:Model:Tag');
    constructor(tag: RawTag) {
        this.log.debug(tag._id);
        this.log.debug("Model");
        this.id = tag._id;
        this.name = tag.name;
        
    }

    public id: any;
    public name: string;
}