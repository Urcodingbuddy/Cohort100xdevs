import { Client } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a new client instance with the connection string from the environment variable
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    // Optionally include SSL settings if required
    ssl: {
        rejectUnauthorized: false
    }
});

async function createUsersTable() {
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN DEFAULT FALSE,
        deleted_at TIMESTAMP
                );
        `)
    console.log(result);
}

async function createAddressTable() {
        const result = await client.query(`
            CREATE TABLE IF NOT EXISTS addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(255),
            state VARCHAR(255),
            zip INTEGER,
            country VARCHAR(100),
            FOREIGN KEY (user_Id) REFERENCES users(id) ON DELETE CASCADE
            );
            `)
        console.log(result)
}


async function UserAndAddressTable() {
    // Connect to the PostgreSQL database
    await client.connect()
    .then(() => console.log('Connected successfully'))
    .catch(e => console.error('Connection error', e.stack));
    createUsersTable();
    createAddressTable();
    console.log('DONE')
}

UserAndAddressTable();