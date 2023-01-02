import logo from "../../assets/logo_todo.svg";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logotipo todo" />
    </header>
  );
}
