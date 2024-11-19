import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import GuestLayout from "./layout/GuestLayout";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<Home />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
