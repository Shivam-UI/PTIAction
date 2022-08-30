import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// inner
import HomeScreen from './HomeScreen';
import AboutScreen from "./aboutus";
import LoginScreen from './LoginScreen';
// globle post
import SinglePost from './futurespost';

function App() {
  return (
    <>
      <div class="wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route
              exact
              path="/Post/:id"
              element={<SinglePost />} />
          </Routes>
          <Routes>
            <Route exact path="/Login" element={<LoginScreen />} />
            <Route exact path="/AboutUs" element={<AboutScreen />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
