import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./pages/Contact";
import  Menu  from "./pages/Menu";
import { Pricing } from "./pages/Pricing";
import { Home } from "./pages/Home";
import Chatbot from "./component/Chatbot";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav className="flex justify-center gap-10 py-7 bg-red-500 text-white">
          <Link to="/" className="text-lg font-semibold">Home</Link>
          {/* <Link to="/pricing" className="text-lg font-semibold">Pricing</Link> */}
          <Link to="/menu" className="text-lg font-semibold">Menu</Link>
          {/* <Link to="/about" className="text-lg font-semibold">About</Link> */}
          <Link to="/contact" className="text-lg font-semibold">Contact</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>


        {/* Chatbot is globally mounted */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
