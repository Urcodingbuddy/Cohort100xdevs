import { useNavigate } from "react-router-dom"
import App from "../App";
import {CreateTodo} from "./CreateTodo.jsx"


export function Landing(){
    return <div>
        <CreateTodo/>
    </div>
}


/*
function Creattion() {
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate('/dashboard')
    }
    return <div>
    <Count/>
    <button style={{cursor: 'pointer',
        ':hover': {
          color: '#535bf2'
        }}}  onClick={handleButtonClick}
   >Go to Dashboard</button>
    </div>

}

function Input(){
    const [setTitle, setDescription] = useState("")
    return <div className="input-area">
      <h2>Todo-App⚛️</h2>
      <input  placeholder="Title" type="text" onChange={(e)=>{
        setInputValue(e.target.value)
      }} />
      <textarea placeholder="Description" type="text" onChange={(e)=>{
        setInputValue(e.target.value)
      }}/>
    </div>
  }
function Buttons() {
    console.log("Button")
    // const setCount = useSetRecoilState(countAtom)
    return <div>
      <button onClick={() => { setCount(count => count + 1) }}> ➕ </button>
    </div>
  }


  */