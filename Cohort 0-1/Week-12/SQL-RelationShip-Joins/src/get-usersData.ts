// write a function to create a users table in your database.
import { Client } from 'pg'
require('dotenv').config();

const client = new Client({
  connectionString: process.env.POSTGRES_URL
})

async function getUser() {
    try{
        await client.connect()
        const userResult = await client.query(`
            SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.pincode 
            FROM users
            LEFT JOIN addresses ON users.id = addresses.user_id
            WHERE users.id = 8
        `)
        console.log('User Details: ',userResult.rows)
        
    }catch(e){
        console.error("Error Getting user: ",e)
    }finally {
        await client.end(); // Close the connection
    }

}

getUser();