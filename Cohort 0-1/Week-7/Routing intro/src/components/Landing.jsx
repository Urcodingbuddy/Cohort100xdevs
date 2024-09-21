import { useNavigate } from "react-router-dom"

export default function Landing() {
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate('/dashboard')
    }
    return <div>
    <h1>Welcome to the Landing Page!</h1>
    <button style={{cursor: 'pointer',
        ':hover': {
          color: '#535bf2'
        }}}  onClick={handleButtonClick}
   >Go to Dashboard</button>
    </div>

}