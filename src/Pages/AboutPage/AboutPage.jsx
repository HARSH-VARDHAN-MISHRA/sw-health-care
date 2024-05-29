import React, { useEffect } from 'react'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }, []);
  return (
    <>
        <div>AboutPage</div>
    </>
  )
}

export default AboutPage