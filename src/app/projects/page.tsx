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
          See more on my{" "}
          <a
            style={{ textDecoration: "underline", color: "#FFF" }}
            href="https://github.com/diogocerutti?tab=repositories"
          >
            {" "}
            Github Page
          </a>
          !
        </h2>
        {projectsApi.projects.map((row, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.description}>
              <div style={{ fontWeight: "bold" }}>{row.name}</div>
              <div>{row.description}</div>
            </div>
            <div>
              <img src={row.image} className={styles.gif} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
