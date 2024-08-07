"use client";

import styles from "./page.module.css";
import homeApi from "./api/Home/index.json";
import { useState } from "react";
import githubIcon from "../../public/media/images/github-w.png";
import linkedinIcon from "../../public/media/images/linkedin-w.png";

export default function Home() {
  const [dropdownAdm, setDropdownAdm] = useState("none");
  const [dropdownConfig, setDropdownConfig] = useState("none");

  return (
    <main className={styles.main}>
      <div className={styles.wrap}>
        <div className="centerInfo">
          <div style={{ fontSize: "48px" }}>{homeApi.centerInfo.name}</div>
          <div style={{ marginTop: "1rem", fontSize: "30px" }}>
            {homeApi.centerInfo.ocuppation}
          </div>
          <div
            style={{
              marginTop: "3rem",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            {homeApi.centerInfo.description}
          </div>
          <div
            style={{
              marginTop: "1rem",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            {homeApi.centerInfo.subDescription}
          </div>
          <div
            style={{ marginTop: "3rem", columnGap: "1rem", display: "flex" }}
          >
            <a href={homeApi.centerInfo.github}>
              <img src={githubIcon.src} />
            </a>
            <a href={homeApi.centerInfo.linkedin}>
              <img src={linkedinIcon.src} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
