import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Web from "./pages/Web";
import Cyber from "./pages/Cyber";
import Systems from "./pages/Systems";
import AI from "./pages/AI";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/cybersecurity" element={<Cyber />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
