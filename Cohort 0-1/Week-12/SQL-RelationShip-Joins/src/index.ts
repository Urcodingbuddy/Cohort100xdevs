// write a function to create a users table in your database.
import { Client } from 'pg'
require('dotenv').config();

const client = new Client({
  connectionString: process.env.POSTGRES_URL
})

async function createUsersTable() {
    try{
        await client.connect()
        const userResult = await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                is_deactivated BOOLEAN DEFAULT FALSE,
                last_login TIMESTAMP WITH TIME ZONE
            );
        `)
        console.log('Users Table Created Success: ',userResult)
        const addressesResult = await client.query(`
            CREATE TABLE IF NOT EXISTS addresses (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                city VARCHAR(100) NOT NULL,
                country VARCHAR(100) NOT NULL,
                pincode VARCHAR(20),
                is_default BOOLEAN DEFAULT FALSE,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        `);
        console.log('Addresses Table Created Successfully:', addressesResult);
    }catch(e){
        console.error("Error Creating Table: ",e)
    }finally {
        await client.end(); // Close the connection
    }

}

createUsersTable();