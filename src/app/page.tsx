"use client";

import styles from "./page.module.css";
import { headerItems, admOptions } from "./api/homeHeader";
import { useState } from "react";
import logoAmpli from "./images/Logo_novo.png";

export default function Home() {
  const [dropdownAdm, setDropdownAdm] = useState("none");
  const [dropdownConfig, setDropdownConfig] = useState("none");

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
            {headerItems.map((row, index) => {
              if (row !== "Administração" && row !== "Configurações") {
                return (
                  <a key={index} href="#" className={styles.headerButton}>
                    {row}
                  </a>
                );
              }
              if (row == "Administração") {
                return (
                  <div
                    key={index}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <a
                      href="#"
                      className={styles.headerButton}
                      onMouseEnter={() => setDropdownAdm("flex")}
                      onMouseLeave={() => setDropdownAdm("none")}
                    >
                      {row}⬇️
                    </a>
                    <div
                      style={{ display: dropdownAdm, flexDirection: "column" }}
                    >
                      {admOptions.map((r, i) => (
                        <div>{r}</div>
                      ))}
                    </div>
                  </div>
                );
              } else if (row == "Configurações") {
                return (
                  <div
                    key={index}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <a
                      href="#"
                      className={styles.headerButton}
                      onMouseEnter={() => setDropdownConfig("flex")}
                      onMouseLeave={() => setDropdownConfig("none")}
                    >
                      {row}⬇️
                    </a>
                    <div
                      className={styles.headerDropdown}
                      style={{ display: dropdownConfig }}
                    >
                      config
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div
            style={{
              justifyContent: "space-between",
              padding: "15px 10px 15px 10px",
            }}
          >
            🔔🗣️
          </div>
        </div>
      </div>
    </main>
  );
}
