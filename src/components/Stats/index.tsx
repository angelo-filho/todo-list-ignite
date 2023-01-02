import styles from "./styles.module.scss";

interface StatsProps {
  tasksAmount: number;
  tasksCompleted: number;
}

export function Stats({ tasksAmount, tasksCompleted }: StatsProps) {
  return (
    <div className={styles.container}>
      <strong>
        Tarefas criadas <span>{tasksAmount}</span>
      </strong>
      <strong>
        Concluídas{" "}
        <span>
          {tasksCompleted} de {tasksAmount}
        </span>
      </strong>
    </div>
  );
}
