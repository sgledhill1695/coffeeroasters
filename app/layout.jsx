import "./globals.css";

import Logo from "./lib/layout/logo";
import Hamburger from "./lib/layout/hamburger";
import Navigation from "./lib/layout/navigation";
import Footer from "./lib/layout/footer";
import MarginWrapper from "./lib/layout/marginWrapper";


export const metadata = {
  title: "Coffeeroasters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MarginWrapper>
          <section className="flex justify-between items-center mt-[33px] sm:mt-[40px]">

            <Logo />
            <Hamburger />
            <Navigation topbarNav={true} />
          </section>
        </MarginWrapper>


        {children}

        <MarginWrapper>
          <Footer />
        </MarginWrapper>
        
      </body>
    </html>
  );
}
