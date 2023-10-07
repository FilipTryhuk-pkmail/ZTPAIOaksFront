import React, {useState, useEffect} from "react";
import '../css/old_css/history.css'
import {useLocation} from 'react-router-dom';

function HistoryScreen() {
  const location = useLocation();

  const [booksData, setBooksData] = useState("{}");
  const [rows, setRows] = useState("");

  const getData = (period) =>{
    fetch("https://markow.pl/login_form.php", {
            method: "GET",
            body: JSON.stringify({login: location.state.login, period: period}),
            // headers: {'Content-Type': 'application/json'}
          })
            .then((response) => response.json())
            .then((data) => {
              setBooksData(JSON.stringify([{"name":"Lord of the Rings","status":"0", date:"11.05.2022"},{"name":"Dune","status":"1", date:"11.05.2022"}]));
              console.log(JSON.parse(booksData));


              let row_data = "";
              for(let i = 0 ; i < JSON.parse(booksData).length ; i++)  
              {
                row_data += "<tr><td>"+ JSON.parse(booksData)[i].name +"</td><td>"+ JSON.parse(booksData)[i].status +"</td><td>"+ JSON.parse(booksData)[i].date +"</td></tr>";
              }
              setRows(row_data);
           
            })
            .catch((error) => console.log(error));
  }

  

  return (
  <>
    <title>HISTORY</title>
    <div className="base-container">
      <header>
        <div className="top_row">
          <div className="small_logo">Golden Oaks</div>
          <div className="username">Hello, {location.state.login}!</div>
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
              <a onClick={() => getData('lastDay')} className="timeline_buttons">
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
            <table>
  <tr>
    <th>Book Name</th>
    <th>Status</th>
    <th>Date</th>
  </tr>
  <tbody dangerouslySetInnerHTML={{ __html: rows }}/>
</table>
          </section>
        </div>
      </main>
    </div>
  </>
  )
}

export default HistoryScreen;