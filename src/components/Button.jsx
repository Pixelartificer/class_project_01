import React from 'react'

const Button = ({text}) => {
  return (
    <>
        <button className='bg-bgGreen py-5 px-12.5 rounded-2xl font-raleway text-text16 font-medium text-sText cursor-pointer border-2 border-bgGreen hover:text-bgGreen hover:bg-sText'>{text}</button>
    </>
  )
}

export default Button
