import { Check, PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from "./styles/app.module.scss";

const tasks_data = [
  {
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: false,
  },
  {
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: true,
  },
  {
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isComplete: true,
  },
];

function App() {
  const [tasks, useTasks] = useState(tasks_data);

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <form className={styles.todo_form} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle size={"1rem"} weight="bold" />
          </button>
        </form>

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
                description={task.description}
                isComplete={task.isComplete}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
