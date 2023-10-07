//TODO: fix this mess

import '../css/old_css/history.css'

function BookcoverScreen() {

  return (
  <>
    <link
        rel="stylesheet"
        type="text/css"
        href="../css/book_cover.css"
    />
    <title>BOOKCOVER</title>
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
        <section className="upload_form">
          <h1>UPLOAD</h1>
          <form action="add_cover" method="POST" encType="multipart/form-data">
            {/*?php
              if(isset($messages)) {
                  foreach ($messages as $message) {
                      echo $message;
                  }
              }
              ?*/}
            <input name="Title" type="text" placeholder="list"/>
            <textarea
                name="description"
                rows={3}
                placeholder="description"
                defaultValue={""}
            />
            <input type="file" name="file"/>
            <button type="submit">Send!</button>
          </form>
        </section>
      </main>
    </div>
  </>
  )
}

export default BookcoverScreen;