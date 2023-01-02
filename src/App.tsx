import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskForm } from "./components/TaskForm";

import { v4 as uuidV4 } from "uuid";

import styles from "./styles/app.module.scss";

const tasks_data = [
  {
    id: uuidV4(),
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    id: uuidV4(),
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    id: uuidV4(),
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    id: uuidV4(),
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: true,
  },
  {
    id: uuidV4(),
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(tasks_data);

  function toggleTaskCompleteState(id: string) {
    console.log(id);

    const tasksWithNewTaskState = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks(tasksWithNewTaskState);
  }

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <TaskForm />

        <div className={styles.tasks_container}>
          <div className={styles.stats}>
            <strong>
              Tarefas criadas <span>5</span>
            </strong>
            <strong>
              Concluídas <span>2 de 5</span>
            </strong>
          </div>

          <div className={styles.tasks}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                isComplete={task.isComplete}
                handleToggleIsComplete={toggleTaskCompleteState}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
