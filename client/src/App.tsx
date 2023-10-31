import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { MainPage } from './pages/mainpage/MainPage';
import Login from './components/login/login';
import OpenClassPage from './components/openClass/OpenClassPage';
import SignUp from './components/signup/SignUp';
import { LectureList } from './pages/lectureList/LectureList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/openclass" element={<OpenClassPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/lectures" element={<LectureList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
