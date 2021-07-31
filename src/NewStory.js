import QUOTES from './quotes';

export default function NewStory ( { newQuote } ) {
  
  function handleClick () {
    newQuote(QUOTES[Math.floor((Math.random()*(10-0))+0)]);
  }
  
  return (
    <button id="new-quote" onClick={handleClick} className="container__footer--button">New quote</button>
  )
}