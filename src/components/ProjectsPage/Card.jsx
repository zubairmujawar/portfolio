import shareImg from "../../assets/share.png";
import github from "../../assets/github.png";
import { motion } from "framer-motion";
const Card = ({ item }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      variants={{
        show: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="card md:w-[20rem] w-[16rem] p-3 md:m-1 border mt-[3rem] items-center bg-white hover:shadow-slate-700 shadow-2xl  transition-all rounded-lg"
      style={{ boxShadow: "11px 11px 8px", maxHeight: "38rem" }}
    >
      <img
        src={item.imgSrc}
        alt={item.title}
        className="object-cover md:h-[15rem] w-full"
      />
      <div>
        <h1 className="fontnormal md:text-2xl text-xl font-bold">
          {item.title}
        </h1>
        <p className=" fontPoppins md:text-sm text-[0.8rem] text-gray-600">
          {item.description}
        </p>
        <div className="gap-8 m-2 w-full flex">
          <a
            href={item.demoLink}
            target="_blank"
            className="bg-[#445eea] rounded-md p-2 md:w-[7rem]  flex justify-between"
          >
            live demo <img src={shareImg} className="w-5" alt="img" />
          </a>
          <button className=" rounded-md p-2 bg-[#445eea] md:w-[7rem]  flex justify-around">
            github <img src={github} className="w-5" alt="img" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
