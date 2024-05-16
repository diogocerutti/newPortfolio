"use client";

import styles from "./page.module.css";
import { headerItems, centerInfo } from "./api/Home";
import { useState } from "react";
import homeIcon from "./images/home-w.png";
import githubIcon from "./images/github-w.png";
import linkedinIcon from "./images/linkedin-w.png";

export default function Home() {
  const [dropdownAdm, setDropdownAdm] = useState("none");
  const [dropdownConfig, setDropdownConfig] = useState("none");

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <a className={styles.headerButton} href="#">
          <img className={styles.homeIcon} src={homeIcon.src} />
        </a>
        <div className={styles.headerItems}>
          {headerItems.map((row, index) => {
            if (row !== "Administração" && row !== "Configurações") {
              return (
                <a key={index} href="#" className={styles.headerButton}>
                  {row}
                </a>
              );
            }
          })}
        </div>
      </div>
      <div className="centerInfo">
        <div style={{ fontSize: "48px" }}>{centerInfo.name}</div>
        <div style={{ marginTop: "0.5rem", fontSize: "30px" }}>
          {centerInfo.ocuppation}
        </div>
        <div
          className="home-description"
          style={{
            marginTop: "3rem",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          {centerInfo.description}
        </div>
        <div
          className="homeDescription"
          style={{
            marginTop: "1rem",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          {centerInfo.subDescription}
        </div>
        <div style={{ marginTop: "3rem" }}>
          <a href={centerInfo.github}>
            <img src={githubIcon.src} />
          </a>
          <a href={centerInfo.linkedin}>
            <img src={linkedinIcon.src} />
          </a>
        </div>
      </div>
    </main>
  );
}
