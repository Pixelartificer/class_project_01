import React from 'react'
import ListItem from './components/ListItem'
import Button from './components/Button'
import NewsCard from './components/NewsCard';
import PricingCard from './components/PricingCard';


const App = () => {
  return (
    <>
      <ul className='flex'>
      </ul>

      <Button text="Read More" />
      <Button text="Contuct me" />


      <NewsCard image={
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
          alt="Team Working"
          className="w-full h-full object-cover"
        />}

        title="Where Should I Buy Next?"
        authorName="Carter Rosser"
        authorImg="https://i.pravatar.cc/100?img=12"
        date="24/08/2021"
        description="From romantic getaways to adventurous hikes, find your next..."
      />


      <PricingCard 
        title="Free Plan"
        price="$0"
        period="/ monthly"
        feature1="Access to editing all blocks"
        feature2="Editing blocks together"
        feature3="Access to all premium icons"
        feature4="A dedicated domain"
        buttonText="Try for Free"
      />
    
    </>
  )
}

export default App
