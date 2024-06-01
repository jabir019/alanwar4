import { BrowserRouter, Routes, Route } from "react-router-dom";

//import page
import Home from "./pages/Home";
import Galeri from "./pages/Galeri";
import Profil from "./pages/Profil";
import Program from "./pages/Program";
import Kontak from "./pages/Kontak";
import Pendaftaran from "./pages/Pendaftaran";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/program" element={<Program />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
