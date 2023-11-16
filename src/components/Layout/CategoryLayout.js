import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewsLetter from "../NewsLetter/NewsLetter";

export default function CategoryLayout({ children }) {
  return (
    <div className="position-relative">
      <Header></Header>
      <Breadcrumb/>
      {children}
      <NewsLetter/>
      <Footer />
    </div>
  );
}