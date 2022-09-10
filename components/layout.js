import Menu from "./menu";
import Footer from "./footer";
import Header from "./head";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
