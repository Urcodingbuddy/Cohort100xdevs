import axios from "axios";

async function getUserDetails() {
  await new Promise((delay) => setTimeout(delay, 2500))
  // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
              <div className="border-b-4">User Details...</div>
                <div>
                    Name:{userData?.name}
                </div>
                Email:  { userData?.email}
            </div>
        </div>
    </div>
  );
}