import "assets/scss/style.scss";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/properties/:id" element={<DetailsPage />} exact />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
