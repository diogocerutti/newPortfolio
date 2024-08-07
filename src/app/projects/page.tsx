"use client";

import styles from "./page.module.css";
import projectsApi from "../api/projects/index.json";

export default function Projects() {
  return (
    <main className={styles.main}>
      <div className={styles.wrap}>
        <h1 style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          {projectsApi.title}
        </h1>
        <h2>
          Veja mais na minha{" "}
          <a
            style={{ textDecoration: "underline", color: "#FFF" }}
            href="https://github.com/diogocerutti?tab=repositories"
          >
            {" "}
            página do Github
          </a>
          !
        </h2>
      </div>
    </main>
  );
}
