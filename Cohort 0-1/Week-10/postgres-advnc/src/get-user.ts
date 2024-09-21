import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config();

async function getUsers(id:number) {
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
        const getQuery = `
            SELECT u.id, u.username, u.email, u.created_at, a.city, a.state, a.zip, a.country
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
            AND u.is_deleted = FALSE;
        `
        const values = [id]
        const res = await client.query(getQuery, values);
        if(res.rows.length>0){
            const user = res.rows[0];
            console.log('User Found: ', user)
            return user;
        }
        else{
            console.log('User not Found, try diffrent Email');
            return null;
        }
    }catch(e){
        console.error('Error while Insertion',e)
    }finally{
        await client.end();
    }
}
getUsers(1);