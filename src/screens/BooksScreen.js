import '../css/old_css/headers.css'
import Logo from "../img/logo.svg"
import LogoSmall from "../img/logo_2.svg"

function BooksScreen() {
  return (
  <>
    <title>BOOKS</title>
    <section className="logos">
      <div className="logo">
        <img src={Logo} alt="Golden Oaks"/>
      </div>
      <div className="logo_subtext">
        <img
            src={LogoSmall}
            alt="Decentralized Book Exchange"
        />
      </div>
    </section>
    <main>
      <div>
        <ul className="page_bar">
          <li>
            <a href="logout" className="selection_buttons">
              Log out
            </a>
          </li>
          <li>
            <a href="books" className="selection_buttons">
              Collection
            </a>
          </li>
          <li>
            <a href="history" className="selection_buttons">
              History
            </a>
          </li>
          <li>
            <a href="cover_upload" className="selection_buttons">
              Upload
            </a>
          </li>
        </ul>
      </div>
      <div className="search-bar">
        <input placeholder="Type to start searching"/>
      </div>
      <div className="Hbox">
        {/*?php foreach ($books as $book): ?*/}
        <div>
          <h2>{/*?= $book-*/}getTitle(); ?&gt; </h2>
          <p>{/*?= $book-*/}getAuthor(); ?&gt; </p>
          <p>{/*?= $book-*/}getPublishingDate(); ?&gt; </p>
        </div>
        {/*?php endforeach; ?*/}
      </div>
    </main>
    <template id="project_template"/>
  </>
);
}

export default BooksScreen;