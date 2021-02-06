import { GraphQLString } from 'graphql';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class RandomStuffResolver {
    @Query(() => GraphQLString, { nullable: true })
    greeting() {
        return null;
    }
}
