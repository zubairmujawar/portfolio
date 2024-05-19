import { Tilt } from "react-tilt";
import Card from "./Card.jsx";
const ProjectPage = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 30, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1, // Speed of the enter/exit transition
    transition: false, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const data = [
    {
      id: 1,
      title: "",
      description: "",
      imgSrc: "",
    },
  ];
  return (
    <div className="">
      <h1 className="text-center md:text-6xl  mx-8 text-4xl my-4">
        Some of my Projects
      </h1>
      <div className="max-w-[1480px] min-h-[60vh]  md:px-[2rem] p-4 mx-auto flex flex-wrap md:justify-between justify-center items-center">
        <Tilt options={defaultOptions}>
          <Card />
        </Tilt>
        <Tilt options={defaultOptions}>
          <Card />
        </Tilt>
        <Tilt options={defaultOptions}>
          <Card />
        </Tilt>
        <Tilt options={defaultOptions}>
          <Card />
        </Tilt>
      </div>
    </div>
  );
};

export default ProjectPage;
