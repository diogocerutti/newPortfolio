import styles from "./page.module.css";
import { headerItems } from "./api/homeHeader";
import logoAmpli from "./images/Logo_novo.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerItems}>
          <div
            style={{
              display: "flex",
              columnGap: 20,
            }}
          >
            <img className={styles.logoAmpli} src={logoAmpli.src} />
            {headerItems.map((row) => (
              <div key={row}>{row}</div>
            ))}
          </div>
          <div
            style={{
              justifyContent: "space-between",
            }}
          >
            🔔🗣️
          </div>
        </div>
      </div>
    </main>
  );
}
