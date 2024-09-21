import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate('/')
    }
    return <div>
        <h1>Dashboard</h1>
        <button onClick={handleButtonClick}>Go Back</button>
    </div>
}