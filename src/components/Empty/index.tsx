import { ClipboardText } from "phosphor-react";
import { ReactNode } from "react";

import styles from "./styles.module.scss";

export function Empty() {
  return (
    <div className={styles.container}>
      <ClipboardText size={58} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
