import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UnitHeadPage from "./pages/UnitHeadPage";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/unit/:unitId" element={<UnitHeadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
