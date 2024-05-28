import { motion } from "framer-motion";
// import bgImgContact from "../assets/slider_img_1.png";
const Services = () => {
  return (
    <div className="flex flex-col min-h-[60vh] gap-3 p-5 bgImgContact">
      {/* <img src={bgImgContact} alt="img" className="bgImgContact"/> */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="p-3 z-2 flex flex-wrap gap-2 w-full justify-evenly flex-col md:flex-row items-center border-black  "
      >
        <div className="p-3 md:w-[35rem] flex-wrap">
          <h1 className="fontnormal md:text-4xl my-4 text-[#445eea] text-2xl">
            What I will Provide You ?
          </h1>
          <p className="fontRadioCanada md:text-lg text-sm text-[#323232ea]">
            As a front-end developer, I specialize in creating visually
            appealing, user-centered websites and applications using web
            technologies such as HTML, CSS, JavaScript, and React.js. I
            implement Responsive Web Design principles, utilizing HTML and CSS
            to automatically adjust the layout and elements of the website to
            ensure optimal viewing experience across different devices and
            screen sizes, including desktops, tablets, and smartphones. I focus
            on building single page applications that provide seamless
            navigation and improve user engagement.
          </p>
        </div>
        <img
          className="p-3 md:w-[38rem] w-[23rem]"
          src="https://cdni.iconscout.com/illustration/premium/thumb/developer-4268348-3560991.png?f=webp"
          alt="img"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="p-3  flex gap-2 w-full justify-evenly  flex-col-reverse md:flex-row items-center border-black  "
      >
        <img
          className="p-3 w-[24rem] "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMipynwFp_x6lTsvFwCEi_eIMA9BGD0jOu4jQbaF0Ew&s"
          alt="img"
        />

        <div className="p-3 md:w-[35rem]">
          <h1 className="fontnormal md:text-4xl my-4 text-[#445eea] text-2xl">
            Expertise in building React-based applications.
          </h1>
          <p className="fontRadioCanada md:text-lg text-[#323232ea] text-sm">
            As a front-end developer with extensive experience in building
            React-based applications, I possess a deep understanding of React.js
            and its ecosystem. My expertise in React includes proficiency in
            JSX, component lifecycle methods, Virtual DOM, state management, and
            more. I am well-versed in utilizing libraries and frameworks like
            Redux, React Router and Firebase to create efficient and
            maintainable code. I have experience in creating reusable components
            and implementing best practices in React development. Additionally,
            I am experienced in utilizing version control tools like Git and
            Github to manage and collaborate on code.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
