import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
