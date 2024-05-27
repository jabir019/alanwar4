import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main>{preprocessCSS.children}</main>

      <Footer />
    </>
  );
}
