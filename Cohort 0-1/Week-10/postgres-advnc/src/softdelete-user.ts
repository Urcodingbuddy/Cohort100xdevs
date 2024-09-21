import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config();

async function softDeleteUser(userId: number){
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      });
      try {
        await client.connect()
        .then(() => console.log('Connected successfully'))
        .catch(e => console.error('Connection error', e.stack));
        const deleteQuery = `
          UPDATE users
          SET is_deleted = TRUE, deleted_at = NOW()
          WHERE id = $1
          AND is_deleted = FALSE;
        `;
        const values = [userId]
        const res = await client.query(deleteQuery, values);
        console.log(`User ID ${userId} marked as deleted`, res.rowCount);
      } catch (e) {
        console.error('Error while soft deleting user', e);
      } finally {
        await client.end();
      }
}

softDeleteUser(1);