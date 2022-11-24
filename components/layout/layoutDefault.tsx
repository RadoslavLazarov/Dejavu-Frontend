import Header from "../header/header";
import Footer from "../footer/footer";

interface Props {
  children: React.ReactNode;
}

export default function LayoutDefault({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
