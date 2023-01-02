import { Task } from "../Task";

import styles from "./styles.module.scss";

interface ITask {
  id: string;
  description: string;
  isComplete: boolean;
}

interface TasksProps {
  tasks: ITask[];
  removeTask: (id: string) => void;
  toggleTaskCompleteState: (id: string) => void;
}

export function Tasks({
  tasks,
  removeTask,
  toggleTaskCompleteState,
}: TasksProps) {
  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isComplete={task.isComplete}
          handleToggleIsComplete={toggleTaskCompleteState}
          handleRemoveTask={removeTask}
        />
      ))}
    </div>
  );
}
