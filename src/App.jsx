import { useState } from "react";
import "./App.css";

function UseState() {
  const [todo, setTodo] = useState("");
  const [father, setFather] = useState("");
  const [rollno, setRollno] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { task: todo, father, rollno }]);
    setTodo("");
    setFather("");
    setRollno("");
  };

  return (
    <div className="body">
      {/* useState with array */}
      <input
        className="border p-1"
        value={todo}
        placeholder="Full Name"
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        className="border p-1"
        value={father}
        placeholder="Father's Name"
        onChange={(e) => setFather(e.target.value)}
      />
      <input
        className="border p-1"
        value={rollno}
        placeholder="Roll No"
        onChange={(e) => setRollno(e.target.value)}
      />
      <button onClick={addTodo} style={{ backgroundColor: "black", color: "white" }}>
        ADD
      </button>

      <center>
        <table className="table-auto mt-4" style={{ border: "1px solid black", width: "300px" }}>
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Father</th>
              <th className="border px-4 py-2">Roll No</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((data, ind) => (
              <tr key={ind}>
                <td className="border px-4 py-2">{data.task}</td>
                <td className="border px-4 py-2">{data.father}</td>
                <td className="border px-4 py-2">{data.rollno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default UseState;
