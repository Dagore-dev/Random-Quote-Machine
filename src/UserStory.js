
import Footer from './Footer';

export default function UserStory ( { quote, author, newQuote } ) {
  return (
    <div className="container__aditional" id="quote-box">
      <figure className="container__quote">
        <blockquote id="text" className="container__quote--text">
          {quote}
        </blockquote>
        <figcaption id="author" className="container__quote--author">
          {author}
        </figcaption>
      </figure>
      <Footer newQuote={newQuote} />
     </div>
  )
}