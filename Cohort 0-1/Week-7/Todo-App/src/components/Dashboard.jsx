import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {FilteredTodo, TodosAtom ,FilterAtom} from "../store/atom/count";

// import 


export function Dashboard() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/')
  }

  const [todos, setTodos] = useRecoilState(TodosAtom);
  const filteredTodos = useRecoilValue(FilteredTodo);
  const [filter, setFilter] = useRecoilState(FilterAtom);


  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return <div>
    <button onClick={handleButtonClick}>Add New ➕</button> 
    <FindTodo handleFilterChange={handleFilterChange} />
    <ol>
        {filteredTodos.map((todo) => (
            <TodoItem key={todo.title} todo={todo} />
        ))}
      </ol>
  </div>
}

function TodoItem({ todo }) {
  return (
    <li>
      <span>--------------------------------</span>
      <h2>{todo.title}</h2>
      <h3>{todo.description}</h3>
      <span>--------------------------------</span>
    </li>
  );
}

function FindTodo({handleFilterChange}) {
  return <div>
    <h4>Find-Todos 👇🏼</h4>
    <input autoFocus placeholder="Keyword                          🔍" type="text" onChange={handleFilterChange}
    />
  </div>
}
