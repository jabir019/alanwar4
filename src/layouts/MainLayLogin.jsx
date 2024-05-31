import NavLogin from "../components/NavLogin";
import FootLogin from "../components/FootLogin";

export default function MainLayLogin({ children }) {
  return (
    <div className="d-flex flex-column " style={{ minHeight: "0vh" }}>
      <NavLogin />

      <main>{children}</main>

      <FootLogin />
    </div>
  );
}
