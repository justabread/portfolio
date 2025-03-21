"use client";

import { css } from "@emotion/react";
import styles from "./page.style";

const Home = () => {
  return (
    <div>
      <main>
        <div className="header">
          <div>János István Papp</div>
          <div
            css={css`
              white-space: pre-line;
            `}
          >
            {`Melldala Torp, 541 97, Lerdala 
            +46793424292 
            pappjanos.munka@gmail.com`}
          </div>
        </div>
        <div className="summary">
          <div>Professional Summary</div>
          <hr></hr>
          <div css={styles.bulletPonts}>
            <div css={styles.bullet}>
              I have attained my education in my home country, Hungary where I
              pursued a bachelor’s degree in Computer Science with a
              specialization of software engineering, completed January of 2023.
            </div>
            <div css={styles.bullet}>
              My main focus area is React with Typescript with unit, cucumber
              and snapshot test coverage. I also worked with Java based backend
              systems.
            </div>
            <div css={styles.bullet}>
              I have extensive experience setting up build pipelines, managing
              test environments and training newcomers.
            </div>
            <div css={styles.bullet}>
              My attention to detail, experience and personal drive made me an
              exceptional employee in all my previous workplaces.
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
