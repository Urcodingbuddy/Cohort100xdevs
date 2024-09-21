import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config();
interface userData {
    username:string,
    id:number
}

const updateUser: userData = {
    username: 'Saifu',
    id:1
}
async function updateData(userData: userData) {
    const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
            rejectUnauthorized:false
        }
    })
    try{
        await client.connect()
        .then(() => console.log('Connected successfully'))
        .catch(e => console.error('Connection error', e.stack));
        const updateQuery = `
        UPDATE users
        set username = $1
        WHERE id = $2
        `
        const values = [updateUser.username, updateUser.id]
        const res = await client.query(updateQuery, values);
        console.log('Update Success: ', res)
    }catch(e){
        console.error(`Couldn't Update`,e)
    }finally{
        await client.end()
    }
}

updateData(updateUser)