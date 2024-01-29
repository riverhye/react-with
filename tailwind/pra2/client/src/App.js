import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';

// import tailwindcss
import './styles/tailwind.css';
import CatDetail from './components/pages/CatDetail';
import Header from './components/Header';
import Login from './components/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<CatDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
