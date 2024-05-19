import shareImg from "../../assets/share.png";
import github from "../../assets/github.png";
import { motion } from "framer-motion";
const Card = () => {
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
      style={{ boxShadow: "11px 11px 8px" }}
    >
      <img
        src="https://mir-s3-cdn-cf.behance.net/projects/404/ab29aa150246017.Y3JvcCw0MTQyLDMyNDAsMTAyLDA.png"
        alt="projectImg"
        className="w-[15rem] "
      />
      <div>
        <h1 className="fontnormal text-2xl ">Project Title Here</h1>
        <p className=" fontPoppins md:text-sm text-[0.8rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. sint hic qui
          saepe unde nemo aliquam beatae? Optio quaerat eaque necessitatibus
          recusandae incidunt fuga ipsam eveniet, quia eligendi! Enim temporibus
          adipisci necessitatibus facere!
        </p>
        <div className="gap-8 m-2 w-full flex">
          <button className="bg-[#445eea] rounded-md p-2 md:w-[7rem]  flex justify-between">
            live demo <img src={shareImg} className="w-5" alt="img" />
          </button>
          <button className=" rounded-md p-2 bg-[#445eea] md:w-[7rem]  flex justify-around">
            github <img src={github} className="w-5" alt="img" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
