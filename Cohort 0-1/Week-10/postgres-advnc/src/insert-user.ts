import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config();
interface UserData {
    username: string;
    email: string;
    password: string;
}
const newUser: UserData = {
    username: 'zeni',
    email: 'zeni@gmail.com',
    password: 'zeniG123'
}
async function insertData(userData: UserData) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
    try{
        await client.connect()
        .then(() => console.log('Connected successfully'))
        .catch(e => console.error('Connection error', e.stack));
        const insertUserQuery = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
        RETURNING id;
        `
        const userValues = [userData.username, userData.email, userData.password]
        const res1 = await client.query(insertUserQuery, userValues);
        const userId = res1.rows[0].id;
        console.log('Insertion success', res1)

        const inserAddressQuery = ` 
            INSERT INTO addresses (user_id, city, state, zip, country)
            VALUES ($1 , null, null, null, null)
            RETURNING id;
        `
        const addressesValue = [userId];
        const res2 = await client.query(inserAddressQuery, addressesValue)
        const addressId = res2.rows[0].id;
        console.log(`Address for User: ${userId} Created With Address ID: ${addressId}`)
    }catch(e){
        console.error('Error while Insertion',e)
    }finally{
        await client.end();
    }
}
insertData(newUser);