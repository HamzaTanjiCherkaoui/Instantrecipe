
import { models } from 'models';
import {MongoClient, ObjectID} from 'mongodb';
import { Logger } from '../core/logger';



export class TagRepository {
    private log = Logger('app:service:TagRepository');

    public async findAll(): Promise<any> {

        let db = await MongoClient.connect('mongodb://localhost:27017/instantrecipe-dev');
        
        this.log.debug("Find All");
        
        let ingredients:any[] =await db.collection('tag').find({}).toArray();

        return ingredients.map((igr) => {

            return {
                id: igr._id, Name: igr.name, recipeIds: igr.recipeIds
            };  
        });
    }


    public async findByIds(ids: any[]): Promise<any> {

        let db = await MongoClient.connect('mongodb://localhost:27017/instantrecipe-dev');

        let tagColl = db.collection('tag');
        return tagColl.find({ '_id': { '$in': ids } }).toArray();
    }

        public async findById(id: any): Promise<models.tag.RawAttributes> {

            let db = await MongoClient.connect('mongodb://localhost:27017/instantrecipe-dev');

            let tagColl = db.collection('tag');
            let result: any = tagColl.findOne({ _id: new ObjectID(id) });
            console.log(result._id);
            console.log(result.name);
            return result;
    }

}