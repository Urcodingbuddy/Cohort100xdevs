import { Client } from 'pg';
import bcrypt from 'bcrypt';
require('dotenv').config();

const client = new Client({
    connectionString: process.env.POSTGRES_URL
});

async function updateUnencryptedPasswords() {
    try {
        await client.connect();

        // Fetch users with unencrypted passwords
        const selectQuery = `
            SELECT id, username, email, password
            FROM users
            WHERE password NOT LIKE '$2b$%';
        `;

        const result = await client.query(selectQuery);
        const users = result.rows;

        if (users.length === 0) {
            console.log('No unencrypted passwords found.');
            return;
        }

        console.log(`Found ${users.length} users with unencrypted passwords.`);

        const saltRounds = 10;

        // Update each user's password
        for (const user of users) {
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);

            const updateQuery = `
                UPDATE users
                SET password = $1
                WHERE id = $2;
            `;

            await client.query(updateQuery, [hashedPassword, user.id]);
            console.log(`Updated password for user ${user.username}`);
        }

        console.log('All unencrypted passwords have been updated.');
    } catch (e) {
        console.error("Error updating passwords: ", e);
    } finally {
        await client.end(); // Close the connection
    }
}

updateUnencryptedPasswords();
