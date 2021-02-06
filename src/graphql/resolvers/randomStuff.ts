import { GraphQLString } from 'graphql';
import { Query, Resolver } from 'type-graphql';

@Resolver()
export class RandomStuffResolver {
    @Query(() => String, { nullable: true })
    greeting() {
        return null;
    }

    @Query(() => [String])
    interestingUrls() {
        return [
            'https://google.com',
            'https://facebook.com'
        ]
    }
}
