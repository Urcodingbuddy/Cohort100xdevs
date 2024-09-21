import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config();

async function restoreUser(userId: number) {
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
      const restoreQuery = `
        UPDATE users
        SET is_deleted = FALSE, deleted_at = NULL
        WHERE id = $1;
      `;
  
      const res = await client.query(restoreQuery, [userId]);
  
      console.log(`User ID ${userId} restored`, res.rowCount);
    } catch (e) {
      console.error('Error while restoring user', e);
    } finally {
      await client.end();
    }
  }
  
  // Example usage
  restoreUser(1);
  