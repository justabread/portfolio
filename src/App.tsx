function App() {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="flex flex-1 mb-5">
        <h1 className="font-bold text-9xl uppercase w-[70%] m-5 self-center">
          Janos Istvan Papp
        </h1>
        <h2 className="flex flex-col font-bold uppercase self-end text-3xl w-[30%] ">
          Full Stack Web Developer
        </h2>
      </div>
      <div className="flex">
        <div className="w-[70%] h-[700px] m-5  border-2 overflow-hidden  rounded-xl shadow">
          <iframe
            src="https://luxorppfstudio.hu/"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="flex flex-col w-[30%] gap-y-15">
          <p>
            I am a full stack web developer with 5 years of experience in the
            industry. I have full-round experience with the web development
            pipeline from the frontend and backend through DevOps and continuous
            deployment which I attained during my previous work experiences. I
            also mentored and managed small-scale teams effectively, and I am
            currently running a successful freelance web development
            creation/consultation business.
          </p>
          <p>
            To the left is my most recent project, a website I built for a small
            business. I worked closely with the owner to create a clean and
            modern design that highlights their services and makes it easy for
            visitors to navigate. The site is fully responsive, performs
            smoothly across devices, and incorporates basic SEO to help reach
            their audience effectively.
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
