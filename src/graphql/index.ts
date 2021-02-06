import { buildSchema } from 'type-graphql';
import {PersonResolver} from './resolvers/person';
import {RandomStuffResolver} from './resolvers/randomStuff';

const createSchema = async () => {
    const schema = await buildSchema({
        resolvers: [PersonResolver, RandomStuffResolver],
    });

    return schema;
}


export default createSchema;

