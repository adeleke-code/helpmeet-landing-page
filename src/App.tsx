import Home from "./pages/Home";
import Artisans from "./pages/Artisans";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<Artisans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
