import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


interface UserTodo {
    title:string,
    description:string,
    done:boolean,
    userId:number,
}

const newTodo: UserTodo = {
    title:"Go to Gym",
    description:"WorkOut regularly",
    done:false,
    userId:3
};

interface ReturnTodo {
    id: boolean,
    title:boolean,
    description:boolean,
    userId:boolean
    done:boolean,
    
}
const newData: ReturnTodo= {
    id:true,
    title:true,
    description:true,
    userId:true,
    done:true,
}

async function insertTodo(userTodo: UserTodo, returnTodo: ReturnTodo) {
   try {
    const res = await prisma.todo.create({
        data: userTodo,
        select: returnTodo
    })
    console.log("Insertion Success")
    return res;
   } catch (error) {
        console.log("Error while Insertion")
        throw error;
   }

}
insertTodo(newTodo,newData)
.then((result) => {
    // Additional handling after insertion if needed
    console.log("Todo inserted successfully:", result);
})
.catch((error) => {
    console.error("Failed to insert todo:", error);
});