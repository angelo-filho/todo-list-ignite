import { PlusCircle } from "phosphor-react";
import { FormEvent, ReactNode, useState } from "react";

import styles from "./styles.module.scss";

interface TaskFormProps {
  onSubmit: (description: string) => void;
}

export function TaskForm({ onSubmit }: TaskFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onSubmit(value);
    setValue("");
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button type="submit">
        Criar <PlusCircle size={"1rem"} weight="bold" />
      </button>
    </form>
  );
}
