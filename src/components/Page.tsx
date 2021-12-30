import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Page.module.css";

const Page = () => {
  const headerOne = document.getElementById("header");

  const firstName = "Kamil";
  const lastName = "Davulcuoglu";

  console.log(headerOne);

  return (
    <div className={styles.header}>
      <div className={styles.headerBlock}>
        <h1 id="header">
          <span className={styles.headerOne}>
            {firstName.split("").map((letter, index) => {
              let style = { animationDelay: `${1 + index / 10}s` };
              return (
                <span
                  key={index}
                  className={styles.animatedLetter}
                  style={style}
                >
                  {letter}
                </span>
              );
            })}
          </span>
          <span className={styles.headerTwo}>
            {lastName.split("").map((letter, index) => {
              let style = { animationDelay: `${1.4 + index / 10}s` };
              return (
                <span
                  key={index}
                  className={styles.animatedLetter}
                  style={style}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Page;
