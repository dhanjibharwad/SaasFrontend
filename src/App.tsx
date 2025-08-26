import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WebLayout from "./web/layout";
import AdminLayout from "./admin/layout";
import Home from "./web/home";
import Contact from "./web/contact";
import Dashboard from "./admin/dashboard";
import Dash from "./admin/dash";

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
