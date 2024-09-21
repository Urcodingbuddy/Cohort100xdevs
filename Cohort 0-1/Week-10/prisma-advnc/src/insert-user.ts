import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


interface UserData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phonenumber: string;
}

const newUser: UserData = {
    email: 'saifubro@gmail.com',
    password: 'securepassword',
    firstName: 'saifu',
    lastName: 'bro',
    phonenumber: "123456789"
};

interface returnData {
    id: boolean,
    firstName:boolean,
    lastName:boolean,
    phonenumber:boolean
}
const newData: returnData= {
    id:true,
    firstName:true,
    lastName: true,
    phonenumber: true

}

async function insertUser(UserData: UserData, returnData: returnData) {
   try {
    const res = await prisma.user.create({
        data: UserData,
        select: returnData
    })
    console.log("Insertion Success",res)
    return res;
   } catch (error) {
        console.log("Error while Insertion", error)
        throw error;
   }

}

insertUser(newUser,newData)
.then((result) => {
    // Additional handling after insertion if needed
    console.log("user inserted successfully:", result);
})
.catch((error) => {
    console.error("Failed to insert user:", error);
});