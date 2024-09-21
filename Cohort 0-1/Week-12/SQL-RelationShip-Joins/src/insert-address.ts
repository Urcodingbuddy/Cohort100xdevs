import { Client } from 'pg';
require('dotenv').config();

const client = new Client({
    connectionString: process.env.POSTGRES_URL
});
interface AddressDetails {
    city: string;
    country: string;
    pincode: string;
}

async function addAddressToUser(userId:number, addressDetails:AddressDetails) {
    try {
        await client.connect();

        // Step 1: Insert a new address for the existing user
        const insertAddressQuery = `
            INSERT INTO addresses (user_id, pincode, city, country)
            VALUES ($1, $2, $3, $4);
        `;
        await client.query(insertAddressQuery, [userId, addressDetails.pincode, addressDetails.city, addressDetails.country]);

        console.log('Address created for user ID:', userId);

    } catch (e) {
        console.error('Error inserting address:', e);
    } finally {
        await client.end(); // Close the connection
    }
}

// Example usage:
const userId: number =  8; // Existing user ID
const addressDetails: AddressDetails = {
    pincode: '480001',
    city: 'Chhindwara',
    country: 'india',
};

addAddressToUser(userId, addressDetails);
