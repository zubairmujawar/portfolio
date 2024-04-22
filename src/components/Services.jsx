import React from 'react'
import img1 from '../assets/1.gif'
import img2 from '../assets/2.gif'
const Services = () => {
  return (
    <div className='flex flex-col min-h-[60vh] gap-3 p-5 '>
        
        <div className='p-3  flex gap-2 w-full justify-evenly flex-col md:flex-row items-center border-black  '>
            <div className='p-3 md:w-[35rem]'>
                <h1 className='fontnormal md:text-4xl my-4 text-2xl'>What I will Provide You ?</h1>
                <p className='fontRadioCanada md:text-lg text-sm text-[#323232ea]'>As a front-end developer, I specialize in creating visually appealing, user-centered websites and applications using web technologies such as HTML, CSS, JavaScript, and React.js. I implement Responsive Web Design principles, utilizing HTML and CSS to automatically adjust the layout and elements of the website to ensure optimal viewing experience across different devices and screen sizes, including desktops, tablets, and smartphones. I focus on building single page applications that provide seamless navigation and improve user engagement.</p>
            </div>
            <img className='p-3 md:w-[38rem] w-[23rem]' src={img1} alt="img" />
        </div>

        <div className='p-3  flex gap-2 w-full justify-evenly  flex-col-reverse md:flex-row items-center border-black  '>
        <img className='p-3 w-[24rem] ' src={img2} alt="img" />
            
            <div className='p-3 md:w-[35rem]'>
                <h1 className='fontnormal md:text-4xl my-4 text-2xl'>Expertise in building React-based applications.</h1>
                <p className='fontRadioCanada md:text-lg text-[#323232ea] text-sm'>As a front-end developer with extensive experience in building React-based applications, I possess a deep understanding of React.js and its ecosystem. My expertise in React includes proficiency in JSX, component lifecycle methods, Virtual DOM, state management, and more. I am well-versed in utilizing libraries and frameworks like Redux, React Router and Firebase to create efficient and maintainable code. I have experience in creating reusable components and implementing best practices in React development. Additionally, I am experienced in utilizing version control tools like Git and Github to manage and collaborate on code.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Services