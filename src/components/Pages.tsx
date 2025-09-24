import { useEffect, useState } from "react";
import Tabs from "./Tabs/Tabs";
import Tab from "./Tabs/Tab";
import { Briefcase, PanelTop, Phone, Mail, MapPin } from "lucide-react";
import { ClipLoader } from "react-spinners";

const Pages = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}>
      <Tab
        title="About Me"
        description="Welcome to my portfolio website!"
        TabIcon={<Briefcase />}
      >
        <div className="flex w-full">
          <div className="flex flex-col p-5 gap-y-10">
            <h1 className="uppercase text-9xl">Janos Istvan Papp</h1>
            <p className="max-w-200 text-2xl bg-accent-alt p-5 rounded-2xl">
              I am a{" "}
              <span className="font-bold text-accent">
                full stack web developer
              </span>{" "}
              with <span className="font-bold text-accent">5 years</span> of
              experience in the industry. I have full-round experience with the
              web development pipeline from the{" "}
              <span className="font-bold text-accent">frontend</span> and{" "}
              <span className="font-bold text-accent">backend</span> through{" "}
              <span className="font-bold text-accent">DevOps</span> and
              continuous deployment{" "}
              <span className="font-bold text-accent">(CI/CD)</span> which I
              attained during my previous work experiences and independent
              endavours. I also mentored and managed small-scale teams
              effectively, and I am currently running a successful freelance web
              development creation/consultation business.
            </p>
          </div>
          <div className="flex flex-1 flex-col p-5 gap-y-10 items-end">
            <div className="flex flex-col gap-y-5 border-2 p-2 rounded-xl">
              <div className="flex gap-x-2 items-center">
                <Phone />
                <p>+46 79 342 4292</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <Mail />
                <p>pappjanos.munka@gmail.com</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <MapPin />
                <p>Fräkenvägen 10, 123 52 Farsta, Stockholm</p>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab
        title="LuxorPPF"
        description="My first commercial project"
        TabIcon={<PanelTop />}
      >
        {(() => {
          const [loading, setLoading] = useState(true);

          const handleLoad = () => {
            setLoading(false);
          };

          useEffect(() => {
            if (currentTab !== 1) {
              setLoading(true);
            }
          }, [currentTab]);

          return (
            <>
              <div className="flex flex-col w-[20%] border-4 p-2 gap-y-5 rounded-2xl m-5">
                <h2 className="bg-accent-alt p-2 rounded-xl">
                  To the right is my most recent project, a website I built for
                  a small business. I worked closely with the owner to create a
                  clean and modern design that highlights their services and
                  makes it easy for visitors to navigate. The site is fully
                  responsive, performs smoothly across devices, and incorporates
                  basic SEO to help reach their audience effectively.
                </h2>
                <h2 className="bg-accent-alt p-2 rounded-xl">
                  I used <span className="font-bold text-accent">React</span>{" "}
                  with <span className="font-bold text-accent">Typescript</span>{" "}
                  built upon <span className="font-bold text-accent">Vite</span>{" "}
                  as a framework. I have decided to use{" "}
                  <span className="font-bold text-accent">Tailwind</span> for
                  styling for its simple approach to element styleing and to
                  familiarize myself with new cutting edge tools in web
                  development.
                </h2>
              </div>
              <div className="flex  flex-1 w-[80%] justify-center items-center">
                <div className="flex items-center justify-center bg-text rounded-2xl w-[95%] h-[85%] p-2">
                  {loading && <ClipLoader />}
                  <iframe
                    src="https://luxorppfstudio.hu/"
                    className={`w-full h-full rounded-2xl ${loading && `hidden`}`}
                    onLoad={handleLoad}
                  ></iframe>
                </div>
              </div>
            </>
          );
        })()}
      </Tab>
      <Tab title="Test1" description="A test page" TabIcon={<PanelTop />}>
        <h1>TEST1</h1>
      </Tab>
      <Tab title="Test2" description="Another test page" TabIcon={<PanelTop />}>
        <h1>TEST2</h1>
      </Tab>
    </Tabs>
  );
};

export default Pages;
