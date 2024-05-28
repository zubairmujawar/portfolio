import { Tilt } from "react-tilt";
import Card from "./Card.jsx";
import textToolImg from '../../assets/text-tool.png'
import quizlImg from '../../assets/quiz.png'
import weatherlImg from '../../assets/weather.png'
import agssofaslImg from '../../assets/agssofas.png'
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
  const projectData = [
    {
      id: 1,
      title: "Furniture website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sint hic qui saepe unde nemo aliquam beatae? Optio quaerat eaque necessitatibus recusandae incidunt fuga ipsam eveniet, quia eligendi! Enim temporibus adipisci necessitatibus facere!",
      imgSrc: agssofaslImg,
      demoLink: "https://agssofas.com",
      githubLink: ''
    },
    {
      id: 2,
      title: "Text Tool",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sint hic qui saepe unde nemo aliquam beatae? Optio quaerat eaque necessitatibus recusandae incidunt fuga ipsam eveniet, quia eligendi! Enim temporibus adipisci necessitatibus facere!",
      imgSrc: textToolImg,
      demoLink: "https://text-magic-8c36d.netlify.app/",
      githubLink: ''
    },
    {
      id: 3,
      title: "Quiz game",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sint hic qui saepe unde nemo aliquam beatae? Optio quaerat eaque necessitatibus recusandae incidunt fuga ipsam eveniet, quia eligendi! Enim temporibus adipisci necessitatibus facere!",
      imgSrc: quizlImg,
      demoLink: "https://quiz-game-20513.netlify.app/",
      githubLink: ''
    },
    {
      id: 4,
      title: "Furniture website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sint hic qui saepe unde nemo aliquam beatae? Optio quaerat eaque necessitatibus recusandae incidunt fuga ipsam eveniet, quia eligendi! Enim temporibus adipisci necessitatibus facere!",
      imgSrc: "https://www.befunky.com/images/prismic/00051caf-f04b-4ee1-bab8-b32fbe00f7ad_how-to_text-editor-13.svg",
      demoLink: "https://text-magic-8c36d.netlify.app/",
      githubLink: ''
    },
    {
      id: 5,
      title: "Text Tool",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sint hic qui saepe unde nemo aliquam beatae? Optio quaerat eaque necessitatibus recusandae incidunt fuga ipsam eveniet, quia eligendi! Enim temporibus adipisci necessitatibus facere!",
      imgSrc: "https://www.befunky.com/images/prismic/00051caf-f04b-4ee1-bab8-b32fbe00f7ad_how-to_text-editor-13.svg",
      demoLink: "https://text-magic-8c36d.netlify.app/",
      githubLink: ''
    },
    {
      id: 6,
      title: "Weather App",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. sint hic qui saepe unde nemo aliquam beatae? Optio quaerat eaque necessitatibus recusandae incidunt fuga ipsam eveniet, quia eligendi! Enim temporibus adipisci necessitatibus facere!",
      imgSrc: weatherlImg,
      demoLink: "https://weather-info-today.netlify.app/",
      githubLink: ''
    },
  ];
  return (
    <div className="">
      <h1 className="text-center md:text-6xl  mx-8 text-4xl my-4">
        Some of my Projects
      </h1>
      <div className="max-w-[1480px] min-h-[60vh] gap-[3rem]  md:px-[2rem] p-4 mx-auto flex flex-wrap md:justify-between justify-center items-center">
      {projectData?.map((item) => (
        <Tilt key={item.id} options={defaultOptions}>
          <Card item={item} />
        </Tilt>
      ))}
        
        
      </div>
    </div>
  );
};

export default ProjectPage;
