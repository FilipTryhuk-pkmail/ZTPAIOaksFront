import React, {useState, useEffect} from "react";
import '../css/old_css/history.css'
import {json, useLocation} from 'react-router-dom';

function HistoryScreen() {
  const location = useLocation();

  const [booksData, setBooksData] = useState("{}");
  const [rows, setRows] = useState("");

  const getData = (period) =>{
    fetch("http://localhost:8080/books", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwiZXhwIjoxNjk2NjYxNzkwLCJpYXQiOjE2OTY2NTA5OTAsInNjb3BlIjoicmVhZCJ9.iC1itQygCBs43KEpQaqiuSSypS23TsTBkPZrg-3iWTVMTlSHvxLj9j4zLQ3PZWU3sUe43UKiVZ0Sw5dUKcKOxY1FWDgNRCgoEmOWTWMszKAZM2Au1Q4mEdVsVweyFwZ3IoN28GHKYcpPo1_aD9v5McH8hNLdJqOXMrSLLOeSV4PnNvJP84t0bJF9ffYTMi-wKH1UHuPFtsMK6380Q5i8XzXn_Ya7pNmm9P_E-zLcpSsbfxmqt2nRyWZ0NTD1EG7OL4YvSIUv5vkaV48xH9urEkHqj-4r0SHWrup1oAyDUqWuvO8Zvpv3PdmIcosJfwGdDyoY-cPz8xZqhUH_CvMrnA'
      }
    })
        .then((response) => response.json())
        .then((fetched) => {
          return Object.values(Object.values(fetched)[0])[0];
        })
        .then((data) => {
          console.log(JSON.parse(JSON.stringify(data)))

          let row_data = "";
          for(let j = 0; j < 2; j++) {
            row_data += "<tr><td>"+ JSON.parse(JSON.stringify(data))[j].title +"</td><td>"+ JSON.parse(JSON.stringify(data))[j].author +"</td><td>"+ JSON.parse(JSON.stringify(data))[j].publishingDate +"</td></tr>"
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
              <a onClick={() => getData(24)} className="timeline_buttons">
                last day
              </a>
              <a onClick={() => getData(24*7)} className="timeline_buttons">
                last week
              </a>
              <a onClick={() => getData(24*31)} className="timeline_buttons">
                last month
              </a>
              <a onClick={() => getData(24*365)} className="timeline_buttons">
                last year
              </a>
              <a onClick={() => getData(-1)} className="timeline_buttons">
                all time
              </a>
            </div>
          </section>
          <section className="HboxRows">
            <h2>HISTORY</h2>
            <table>
              <tbody>
              <tr>
                <th>Book Name</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
              </tbody>
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