import { Check, Trash } from "phosphor-react";

import styles from "./styles.module.scss";

interface TaskProps {
  description: string;
  isComplete?: boolean;
}

export function Task({ description, isComplete = false }: TaskProps) {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="check" checked={isComplete} />
        <div />
        <label htmlFor="check">
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
