import './App.css';
import EBooksMainPage from './E-Books/MainPage/EBooksMainPage';
import { Routes, Route } from "react-router-dom";
import Books from './E-Books/MainPage/Books';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<EBooksMainPage />} />
        <Route path="/Books" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
