import React from "react";
import contactImg from "../assets/contact.gif";
import { motion } from "framer-motion";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e41b8328-284a-4560-b0f3-3938b09d55d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="max-w-[1440px] mx-auto md:mt-[10rem] mt-10 md:flex justify-around bg-white"
      >
        <div className="max-w-[1440px] mx-auto p-2 my-4 m-2 ">
          <h1 className="text-center text-6xl my-4 text-[#445eea]">
            Let's Meet
          </h1>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-1 my-10 md:w-[45rem] p-3 border border-black rounded-lg"
          >
            <label htmlFor="" className="">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="p-2 border border-gray-500 rounded-md w-full "
              placeholder="Enter Your name"
            />
            <label htmlFor="" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="p-2 border border-gray-500 rounded-md w-full "
              placeholder="Enter Your email"
            />
            <label htmlFor="" className="">
              Message
            </label>
            <textarea
              name="message"
              required
              className="p-2 border border-gray-500 rounded-md wfull h-[6rem] "
              placeholder="Enter Your message"
            ></textarea>
            <button
              type="submit"
              title="submit form"
              className="bg-[#445eea] rounded-md p-2 my-3 w-[7rem] text-center"
            >
              Submit Form
            </button>
          </form>
          <span>{result}</span>
        </div>
        <img src={contactImg} alt="contactImg" />
      </motion.div>
      <h2 className="text-center bg-black text-white p-2">
        © Copyrite 2024, All rights resirved
      </h2>
    </>
  );
};

export default Contact;
