import "./App.css";
import Course from "./course.js";
import { useState } from "react";
function randomcourse() {
  const coursearr = ["angular", "bootstrap5", "ccsharp", "kompleweb"];
  return coursearr[Math.floor(Math.random() * coursearr.length)];
}

function App() {
  const [courses, setCourse] = useState([]);

  const handleclick = () => {
    setCourse([...courses, randomcourse()]);
  };
  const courselist = courses.map((course, index) => {
      return <Course key={index} coursename={course} />;
    });
  
  return (
    <div className="App">
      <button className="btn1" onClick={handleclick}>Kurs ekle</button>
      <div className="contanier">{courselist}</div>
    </div>
  );
}

export default App;
