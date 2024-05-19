import React from "react";
import Typed from "typed.js";
import '../components/Box'
const HomePage = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" WEB DESIGNER", "PROFESSIONAL CODER", "WEB DEVELOPER"],
      typeSpeed: 100,
      backSpeed: 20,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="homepage flex justify-center items-center">
      
      <div className="info  flex flex-wrap gap-2 text-black flex-col m-3 justify-center items-center">
        <h2 className="text-[3rem] fontPoppins text-[#445eea]  font-bold">
          WELCOME
        </h2>

        <h1 className="md:text-[4rem] text-2xl fontnormal font-[900] ">
          I'M A <span ref={el} />.
        </h1>
        <p className="text-lg fontnormal md:px-52 tracking-tight text-center font-normal">
          A passionate web developer with a knack for turning ideas into
          interactive and visually appealing digital experiences.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
