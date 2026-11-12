
import { useState } from "react";

import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      titre: "Apprendre React",
      description: "Comprendre les composants React",
      statut: "En cours",
      dateLimite: "2026-11-20"
    },
    {
      id: 2,
      titre: "Faire le projet",
      description: "Développer une application TaskManager",
      statut: "En attente",
      dateLimite: "2026-11-25"
    }
  ]);

  function ajouterTache(nouvelleTache) {
    setTasks([...tasks, nouvelleTache]);
  }

  return (
    <div>
      <Header />

      <main className="container">
        <TaskForm onAddTask={ajouterTache} />

        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
