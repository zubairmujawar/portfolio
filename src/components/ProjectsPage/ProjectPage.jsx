import React from 'react';
import Card from './Card.jsx'
const ProjectPage = () => {
  const data = [
    {
      id: 1,
      title: '',
      description: '',
      imgSrc: ''
    }
  ]
  return (
   <div className='md:my-16'>
      <h1 className='text-center md:text-6xl  mx-8 text-4xl my-4'>Some of my Projects</h1>
    <div className='max-w-[1480px]  md:px-[5rem] p-4 mx-auto flex flex-wrap md:justify-between justify-center items-center'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
   </div>
  )
}

export default ProjectPage