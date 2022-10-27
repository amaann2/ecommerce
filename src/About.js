import React from 'react'
import Hero from './component/Hero'

const About = () => {
  const data = {
    name: "ecommerce store",
  };
  return (
    <Hero data={data}/>
  )
}

export default About