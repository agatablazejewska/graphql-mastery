import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import createSchema from './graphql';

const mount = async () => {
    const schema = await createSchema();

    const server = new ApolloServer({ schema });

    await server.listen({ port: process.env.PORT });
};

mount();
