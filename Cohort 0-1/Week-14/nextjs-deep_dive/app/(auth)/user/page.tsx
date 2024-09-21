import { signup } from "@/app/actions/user";
import { PrismaClient } from "@prisma/client"; 
const client = new PrismaClient();
async function fetchData() {
    try {
        const user = await client.user.findFirst();

        return {
            email: user?.email,
            name:  user?.name
        }
        
    } catch (e) {
        console.log(e)
    }
}

export default async function User() {
    const data = await fetchData();
    await signup('awdawd','awdawd','awdawd')
    return (
        <div>
            {data?.name}
            {data?.email}
        </div>
    )
}