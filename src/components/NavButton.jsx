import React from 'react'

const NavButton = ({text}) => {
  return (
    <>
      <button className='bg-transparent py-2.5 px-5.5 rounded-2xl font-raleway text-text16 font-medium text-sText cursor-pointer border border-sText hover:text-heroBg hover:bg-sText'>{text}</button>
    </>
  )
}

export default NavButton