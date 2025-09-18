import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Binder from "./pages/Binder";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/binder" element={<Binder />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
