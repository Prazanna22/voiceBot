import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./pages/Contact";
import  Menu  from "./pages/Menu";
import { Home } from "./pages/Home";
import Chatbot from "./component/Chatbot";
import MenuPage from "./menu/MenuPage";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav className="flex justify-center gap-10 py-5 bg-red-500 text-white">
          <Link to="/" className="text-lg font-semibold">Home</Link>
          <Link to="/menu" className="text-lg font-semibold">Menu</Link>
          <Link to="/contact" className="text-lg font-semibold">Contact</Link>
         
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu/:eventName" element={<MenuPage />} />
        </Routes>


        {/* Chatbot is globally mounted */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
