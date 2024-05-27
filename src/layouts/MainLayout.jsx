import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  return (
    <>
      <Navbar />

      <main>{props.children}</main>

      <Footer />
    </>
  );
}
