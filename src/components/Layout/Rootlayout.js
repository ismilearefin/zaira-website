import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Rootlayout({ children }) {
  return (
    <div className="position-relative">
      <Header></Header>
      {children}
      <Footer />
    </div>
  );
}
