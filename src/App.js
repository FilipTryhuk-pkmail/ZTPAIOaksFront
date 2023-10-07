import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from "react-router-dom";
import './css/App.css';

import LoginScreen from './screens/LoginScreen'
import LogoutScreen from './screens/LogoutScreen'
import HistoryScreen from './screens/HistoryScreen'
import RegisterScreen from './screens/RegisterScreen'
import BooksScreen from './screens/BooksScreen'
import BookcoverScreen from './screens/BookcoverScreen'

function App() {
  return (
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/logout" element={<LogoutScreen />} />
            <Route path="/history" element={<HistoryScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/books" element={<BooksScreen />} />
            <Route path="/book_cover" element={<BookcoverScreen />} />
          </Routes>
        </main>
      </Router>
  );
}

export default App;
