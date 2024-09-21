import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FilteredTodo, TodosAtom, FilterAtom } from "../store/atom/count";


const useCreateTodo = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const handleAddTodo = (title, description) => {
        const newTodo = { title, description };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitle(""); // Reset title state
        setDescription(""); // Reset description state
    };
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return handleAddTodo;
};


export function CreateTodo({ onTodoCreated }) {
    const [todos, setTodos] = useRecoilState(TodosAtom);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/dashboard')
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };


    return <div className="input-area">
        <h2>Todo-App⚛️</h2>
        <input placeholder="Title" type="text" value={title} onChange={handleTitleChange} />
        <textarea placeholder="Description" type="text" value={description} onChange={handleDescriptionChange} />
        <Buttons title={title} description={description} setTodos={setTodos} setTitle={setTitle} setDescription={setDescription} />
        <button style={{
            cursor: 'pointer',
            ':hover': {
                color: '#535bf2'
            }
        }} onClick={handleButtonClick}
        >Todos 🔍 </button>
    </div >
}
function Buttons({ title, description, setTodos,  setTitle, setDescription }) {

    const handleAddTodo = (title, description) => {
        const newTodo = { title, description };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitle(""); // Reset title state
        setDescription(""); // Reset description state
    };

    // console.log("Button")
    // const handleAddTodo = useCreateTodo();

    return <div>
        <button onClick={() => handleAddTodo(title, description)}> ➕ </button>
    </div>
}