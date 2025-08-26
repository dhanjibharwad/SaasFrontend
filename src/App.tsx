<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WebLayout from "./web/layout";
import AdminLayout from "./admin/layout";
import Home from "./web/home";
import Contact from "./web/contact";
import Dashboard from "./admin/dashboard";
import Dash from "./admin/dash";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RFQList from "./pages/RFQList";
>>>>>>> af61d3c813a556d6a605cf22df8833ac1c05297b

export default function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Navigate to="/web" replace />} />
        <Route path="/web" element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dash" element={<Dash />} />
        </Route>

      </Routes>
=======
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-1">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rfqs" element={<RFQList />} />
          </Routes>
        </main>
        <Footer />
      </div>
>>>>>>> af61d3c813a556d6a605cf22df8833ac1c05297b
    </BrowserRouter>
  );
}
