import '../css/old_css/history.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function HistoryScreen() {
  return (
  <>
    <title>HISTORY</title>
    <div className="base-container">
      <header>
        <div className="top_row">
          <div className="small_logo">Golden Oaks</div>
          <div className="username">Hello, user!</div>
        </div>
      </header>


      <main>

        <div>
          <ul className="page_bar">
            <li>
              <a href="/logout" className="selection_buttons">
                Log out
              </a>
            </li>
            <li>
              <a href="/books" className="selection_buttons">
                Collection
              </a>
            </li>
            <li>
              <a href="/history" className="selection_buttons">
                History
              </a>
            </li>
            <li>
              <a href="/book_cover" className="selection_buttons">
                Upload
              </a>
            </li>
          </ul>
        </div>
        <div className="Hbox">
          <section className="HboxRows">
            <h2>Show:</h2>
            <div className="timeline">
              <a href="/#" className="timeline_buttons">
                last day
              </a>
              <a href="/#" className="timeline_buttons">
                last week
              </a>
              <a href="/#" className="timeline_buttons">
                last month
              </a>
              <a href="/#" className="timeline_buttons">
                last year
              </a>
              <a href="/#" className="timeline_buttons">
                all time
              </a>
            </div>
          </section>
          <section className="HboxRows">
            <h2>HISTORY</h2>
            <section className="timeline_buttons">
              <p>author</p>
              <p>title</p>
              <p>date</p>
            </section>
            <section className="timeline_buttons">
              <p>author</p>
              <p>title</p>
              <p>date</p>
            </section>
            <section className="timeline_buttons">
              <p>author</p>
              <p>title</p>
              <p>date</p>
            </section>
            <section className="timeline_buttons">
              <p>author</p>
              <p>title</p>
              <p>date</p>
            </section>
          </section>
        </div>
      </main>
    </div>
  </>
  )
}

export default HistoryScreen;