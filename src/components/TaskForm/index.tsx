import { PlusCircle } from "phosphor-react";
import { ReactNode } from "react";

import styles from "./styles.module.scss";

interface TaskFormProps {}

export function TaskForm({}: TaskFormProps) {
  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={"1rem"} weight="bold" />
      </button>
    </form>
  );
}
