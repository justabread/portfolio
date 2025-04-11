import { css } from "@emotion/react";
import BulletList from "./components/BulletList/BulletList";
import TimelineEntryList from "./components/TimelineEntryList/TimelineEntryList";
import SimpleList from "./components/SimpleList/SimpleList";
import { createMonthYear } from "./utils/dateUtils";
import styles from "./styles";

import { useState } from "react";

function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  return (
    <>
      {showSplash && (
        <div
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeOut 1s ease-in-out 2s forwards;
            z-index: 1000;
          `}
          onAnimationEnd={(e) => {
            if (e.animationName === "fadeOut") {
              setShowSplash(false);
            }
          }}
        >
          <img
            src="/src/images/tabiconV2.png"
            alt="Splash"
            css={css`
              width: 100%;
              height: 100%;
              animation: fadeIn 1s ease-in-out;
              image-rendering: crisp-edges;
              image-rendering: pixelated;
              object-fit: contain;
            `}
          />
        </div>
      )}
      <header>
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
      </header>
      <main css={styles.mainContent}>
        <div className="left-container">
          <div className="summary">
            <BulletList
              title="Professional summary"
              points={[
                `I have attained my education in my home country, Hungary where I pursued a bachelor's degree in Computer Science with a specialization of software engineering, completed January of 2023.`,
                `My main focus area is React with Typescript with unit, cucumber and snapshot test coverage. I also worked with Java based backend systems.`,
                `I have experience with setting up build pipelines, managing test environments and training newcomers.`,
                `My attention to detail, experience and personal drive made me an exceptional employee in all my previous workplaces.`,
              ]}
            />
          </div>
          <div className="work">
            <TimelineEntryList
              title="Work experience"
              rows={[
                {
                  date: { from: createMonthYear(9, 2025) },
                  description: (
                    <BulletList
                      title="Bar and Restaurant, Kårhuset Boulogner, Skövde"
                      points={[
                        `Experience in mixology, cooking, and customer service in a busy working setting.`,
                      ]}
                    />
                  ),
                },
                {
                  date: {
                    from: createMonthYear(2, 2024),
                    to: createMonthYear(6, 2024),
                  },
                  description: (
                    <BulletList
                      title="Computer Science Teacher,Székesfehérvári SZC Árpád Technikum esSzakiskola, Székesfehérvár"
                      points={[
                        `Taught four basics programs of Microsft Office to highschool students`,
                        `Taught computer networks to a specialized military class.`,
                      ]}
                    />
                  ),
                },
                {
                  date: {
                    from: createMonthYear(2, 2024),
                    to: createMonthYear(6, 2024),
                  },
                  description: (
                    <BulletList
                      title="Software Engineer, Verint Systems Kft., Budapest"
                      points={[
                        `Front-end web development with HTML, React, Typescript and Node.js. Extensive web design experience with Sass and the Emotion library.`,
                        `Back-end experience with the MERN stack.`,
                        `Java, C# experience.`,
                        `Implementation of test-driven development with Jest, Gherkin and Playwright.`,
                        `Working within a specialized team to maintain Continuous Integration (CI/CD) of certain projects (Jenkins and Github Actions).`,
                      ]}
                    />
                  ),
                },
              ]}
            />
          </div>
          <div className="education">
            <TimelineEntryList
              title="Education"
              rows={[
                {
                  date: {
                    from: createMonthYear(9, 2019),
                    to: createMonthYear(1, 2023),
                  },
                  description: (
                    <BulletList
                      title="Bachelor’s Degree of Computer Science University of Pannonia, Veszprém"
                      points={[
                        `Web Development, Software Engineering, Data Structures and Algorithms`,
                      ]}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="right-container">
          <div className="courses-and-internships">
            <SimpleList
              title="Courses and internships"
              content="Svenska för Invandrare B, Svenska för Invandrare C, Software Engineer Internship, Game Design Course (M0001D), Introduction to Computer Game Creation (W0017F)"
            />
          </div>
          <div className="computer-skills">
            <SimpleList
              title="Computer skills"
              content="Extensive knowledge of Microsoft Office Family, Video Game Development, Computer Assembly, IT support, 3D asset creation and animation, Python, Relational Databases, Next.JS, SQL, NoSQL, AWS, GitHub Actions, C++, C#, Java, JavaScript, Docker, Linux"
            />
          </div>
          <div className="language-skills">
            <BulletList
              title="Language skills"
              points={[
                `Hungarian - Mother tongue`,
                `English - C1 Level`,
                `Swedish - A2 Level`,
              ]}
            />
          </div>
        </div>
      </main>
      <footer>Test footer text</footer>
    </>
  );
}

export default App;
