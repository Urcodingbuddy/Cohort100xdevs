import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

interface UserData {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    phonenumber?: string;
}

interface UpdateData extends UserData {
    id: number;
    oldPassword: string;
}

interface ReturnData {
    id: boolean,
    email: boolean,
    firstName: boolean,
    lastName: boolean,
    phonenumber: boolean
}


const returnData: ReturnData = {
    id: true,
    email: true,
    firstName: true,
    lastName: true,
    phonenumber: true
}

async function updateUser(updateData:UpdateData, returnData: ReturnData) {
        try {
            const existingUser = await prisma.user.findUnique({
                where : {id: updateData.id}
            })
            if(!existingUser){
                throw new Error("User not Found")
            }
            console.log("Existing User Password:", existingUser.password);
            const isPasswordValid = await bcrypt.compare(updateData.oldPassword, existingUser.password);
            if(!isPasswordValid){
                throw new Error("Invalid Password")
            }

            const updateUser = await prisma.user.update({
                where:{ id: updateData.id},
                data:{
                    email: updateData.email || existingUser.email,
                    firstName: updateData.firstName || existingUser.firstName,
                    lastName: updateData.lastName || existingUser.lastName,
                    password: updateData.password ? await bcrypt.hash(updateData.password, 10) : existingUser.password,
                    phonenumber: updateData.phonenumber || existingUser.phonenumber
                },
                select: returnData,
            });
            console.log("Update Success");
            return updateUser;
        } catch (error) {
            console.log("Error while updating",error)
            throw error;
        }
}


const updateData: UpdateData = {
    id: 1, // Assuming you're updating the user with ID 1
    oldPassword: 'newsecurepassword', // The old password for authentication
    phonenumber:"7440717996" 
};

updateUser(updateData, returnData)
    .then((result) => {
        console.log("User updated successfully:", result);
    })
    .catch((error) => {
        console.error("Failed to update user:", error);
    });