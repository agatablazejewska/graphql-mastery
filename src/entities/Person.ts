import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The Person model' })
export class Person {
    @Field()
    firstName: string;

    @Field()
    email: string;

    @Field(type => [String])
    pets: string[];
}
