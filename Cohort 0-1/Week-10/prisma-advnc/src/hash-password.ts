import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function hashPasswords() {
    try {
        // Fetch all users with unhashed passwords
        const users = await prisma.user.findMany({
            where: {
                // Add any specific filter if needed
            }
        });

        // Iterate over each user and hash the password
        for (const user of users) {
            if (user.password) {
                const hashedPassword = await bcrypt.hash(user.password, 10);

                // Update the user's password in the database
                await prisma.user.update({
                    where: { id: user.id },
                    data: { password: hashedPassword }
                });

                console.log(`Updated password for user ID ${user.id}`);
            }
        }

        console.log("All passwords have been hashed and updated.");
    } catch (error) {
        console.error("Error while hashing passwords:", error);
    } finally {
        await prisma.$disconnect();
    }
}

hashPasswords();
