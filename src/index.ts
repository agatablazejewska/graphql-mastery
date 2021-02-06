import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { RandomStuffResolver } from './graphql/resolvers/randomStuff';

const mount = async () => {
    const schema = await buildSchema({
        resolvers: [RandomStuffResolver],
    });

    const server = new ApolloServer({ schema });

    await server.listen({ port: process.env.PORT });
};

mount();
