import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Artisans from "./pages/Artisans";
import AuthenticatedPage from "./pages/AuthPage";

function App() {
  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/authenticated" element={<AuthenticatedPage />} />
        </Routes>

        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
