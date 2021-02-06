import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The RandomStuff model' })
export class RandomStuff {
    @Field({ nullable: true })
    greeting: string;
}
