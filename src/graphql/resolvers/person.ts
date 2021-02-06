import { GraphQLString } from 'graphql';
import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Person } from '../../entities/Person';

@Resolver(Person)
export class PersonResolver {
    @FieldResolver()
    firstName() { return "John" };

    @FieldResolver()
    email() { return "john@example.com"};

    @FieldResolver()
    pets() {
        return ["Mittens", "Doggo", "Birb"]
    }

    @Query(() => Person)
    person() {
        return new Person()
    }
}