// write a function to create a users table in your database.
import { Client } from 'pg'
require('dotenv').config();
import bcrypt from 'bcrypt';

const client = new Client({
    connectionString: process.env.POSTGRES_URL
})

async function insertUserData(username: string, email:string, password: string, created_at:Date, last_login: Date) {
    try {
        await client.connect()
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const query = `
            INSERT INTO users (username, email, password, created_at, last_login)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id;
        `;
        const result = await client.query(query,[username, email, hashedPassword, created_at, last_login] ) 
        console.log('Table Created Success: ', result)
    } catch (e) {
        console.error("Error Creating Table: ", e)
    } finally {
        await client.end(); // Close the connection
    }
}
const username = 'Mr.someOne';
const email = 'SomeOne@gmail.com';
const password = 'noOne';
const created_at = new Date();
const last_login = new Date();
insertUserData(username, email, password, created_at, last_login);