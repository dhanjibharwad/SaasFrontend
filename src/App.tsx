import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RFQList from "./pages/RFQList";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-1 pt-16">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rfqs" element={<RFQList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
