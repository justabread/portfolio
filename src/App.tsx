import { css } from "@emotion/react";
import BulletList from "./components/BulletList/BulletList";
import TimelineEntryList from "./components/TimelineEntryList/TimelineEntryList";
import { createMonthYear } from "./utils/dateUtils";

function App() {
  return (
    <>
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
            ]}
          />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
