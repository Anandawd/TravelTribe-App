import "assets/scss/style.scss";
import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/example" element={<Example />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
