import './App.css';
import BookDetail from './E-Books/DetailPage/BookDetail';
import EBooksMainPage from './E-Books/MainPage/EBooksMainPage';
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<EBooksMainPage />} />
        <Route path="/BookDetail" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
