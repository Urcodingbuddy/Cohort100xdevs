
import { useState } from "react";
import './CreateTodo.css'
export function CreateTodo({ onTodoCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const newTodo = {
        title: title,
        description: description,
      };

      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      onTodoCreated(json); // Call the callback function with the new Todo item
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
        }}
        id="title"
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
        }}
        id="desc"
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleAddTodo}
      >
        Add a Todo
      </button>
    </div>
  );
}