
import { models } from 'models';
import {MongoClient, ObjectID} from 'mongodb';

export class TagRepository {
    public async findAll(): Promise<models.tag.RawAttributes[]> {

        let db = await MongoClient.connect('mongodb://localhost:27017/instantrecipe-dev');

        let tagColl = db.collection('tag');
        return tagColl.find({}).toArray();
       
    }


    public async findByIds(ids: any[]): Promise<models.tag.RawAttributes[]> {

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