
import { models } from 'models';
import {MongoClient} from '../../node_modules/@types/mongodb';

export class TagRepository {
    public async findAll(options: common.PageinationArguments): Promise<models.tag.RawAttributes[]> {
       
        let db = await MongoClient.connect("mongodb://localhost:27017/instantrecipe-dev");

            let tagColl = db.collection('tag');
            let result = tagColl.find({});
            while (result.hasNext()) {

            }
    }

}