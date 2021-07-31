import { useState, useEffect } from "react";
import QUOTES from './quotes';
import UserStory from './UserStory';

export default function Card () {
  const [currentQuote, setCurrentQuote] = useState(QUOTES[0]);

  useEffect(() => 
    setCurrentQuote(QUOTES[Math.floor((Math.random()*(10-0))+0)])
  ,[]);
  
  return (
    <article className="container">
      <UserStory quote={currentQuote.quote} author={currentQuote.author} newQuote={setCurrentQuote}/>
    </article>
  )
}