import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="max-h-screen">{children}</main>
      <Footer />
    </>
  )
};
export default RootLayout;
