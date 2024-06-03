import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  return (
    <>
      <div className="d-flex flex-column align-items-stretch">
        <Navbar />

        <main>{props.children}</main>

        <Footer />
      </div>
    </>
  );
}
