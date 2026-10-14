import React from 'react'
import ListItem from './components/ListItem'
import Button from './components/Button'
import NewsCard from './components/NewsCard';


const App = () => {
  return (
    <>
      <ul className='flex'>
      </ul>

    <Button text="Read More"/>
    <Button text="Contuct me"/>

   
  <NewsCard image={
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            alt="Team Working"
            className="w-full h-full object-cover"
          />} />

          


    </>
  )
}

export default App
