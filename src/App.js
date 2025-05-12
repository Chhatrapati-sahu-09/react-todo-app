import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodoList([...todoList, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    const updatedList = [...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);
  };

  const deleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 Simple To-Do List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todoList.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <span
              onClick={() => toggleComplete(index)}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                color: item.completed ? "gray" : "black",
                cursor: "pointer",
                flex: 1,
              }}
            >
              {item.completed ? "✅" : "🔲"} {item.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteButton}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  deleteButton: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "18px",
    color: "red",
    cursor: "pointer",
  },
};

export default App;



Chhatrapati-sahu-09