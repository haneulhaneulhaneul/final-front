
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
// import Login from './pages/Login';
import MyPage from './pages/MyPages/MyPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Login /> */}
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );  
}

export default App;
