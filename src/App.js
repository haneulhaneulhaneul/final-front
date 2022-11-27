
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
// import Login from './pages/Login';
import MyPage from './pages/MyPages/MyPageMain';
import Calendar from './pages/MyPages/Calendar';
import Bookmark from './pages/MyPages/Bookmark';
import Hashtag from './pages/MyPages/Hashtag';
import MyStudy from './pages/MyPages/MyStudy';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Login /> */}
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/hashtag" element={<Hashtag />} />
        <Route path="/myStudy" element={<MyStudy />} />
      </Routes>
    </Router>
  );  
}

export default App;
