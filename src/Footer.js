import Social from "./Social";
import NewStory from "./NewStory";

export default function Footer ( { newQuote } ) {
  return (
    <div className="container__footer">
      <Social />
      <NewStory newQuote={newQuote}/>
    </div>
  )
}