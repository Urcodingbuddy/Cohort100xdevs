import { Client } from "pg";
import dotenv from 'dotenv';
import { query } from "express";
dotenv.config();

interface userAddress{
    city:string,
    state:string,
    zip: number,
    country:string
    user_id : number,
}
const updateUA : userAddress = {
    city:"Chhindwara",
    state:"M.P",
    zip: 480001,
    country: "INDIA",
    user_id: 1,
}

async function updateAddress(updateUA: userAddress) {
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
        UPDATE addresses 
        SET city= $1, state= $2, zip= $3, country= $4
        WHERE user_id = $5
        `
        const values = [updateUA.city, updateUA.state, updateUA.zip, updateUA.country, updateUA.user_id]
        const res = await client.query(updateQuery, values);
        console.log('Update Success: ', res)
    }catch(e){
        console.error(`Couldn't Update`,e)
    }finally{
        await client.end()
    }
}
updateAddress(updateUA)