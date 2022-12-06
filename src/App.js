
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
// import Login from './pages/Login';
import MyPage from './pages/MyPages/MyPageMain';
import Calendar from './pages/MyPages/Calendar';
import Bookmark from './pages/MyPages/Bookmark';
import Hashtag from './pages/MyPages/Hashtag';
import MyStudy from './pages/MyPages/MyStudy';
import GoogleCalendarLogin from './pages/MyPages/gCalendarLogin';
import GoogleCalendarCode from './pages/MyPages/gCalendarCode';
import GoogleCalendar from './pages/MyPages/googleCalendar'


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
        <Route path="/googleCalendarLogin" element={<GoogleCalendarLogin />} />
        <Route path="/googleCalendarCode" element={<GoogleCalendarCode />} />
        <Route path="/googleCalendar" element={<GoogleCalendar />} />
      </Routes>
    </Router>
  );  
}

export default App;
