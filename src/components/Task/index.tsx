import { Check, Trash } from "phosphor-react";

import styles from "./styles.module.scss";

interface TaskProps {
  id: string;
  description: string;
  isComplete?: boolean;
  handleToggleIsComplete: (id: string) => void;
}

export function Task({
  id,
  description,
  isComplete = false,
  handleToggleIsComplete,
}: TaskProps) {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={`check-${id}`}
          checked={isComplete}
          onChange={() => handleToggleIsComplete(id)}
        />
        <div />
        <label htmlFor={`check-${id}`}>
          <Check size={"1rem"} weight="bold" />
        </label>
      </div>
      <p className={`${isComplete ? styles.complete : ""}`}>{description}</p>
      <button>
        <Trash size={"16px"} weight="bold" />
      </button>
    </div>
  );
}
