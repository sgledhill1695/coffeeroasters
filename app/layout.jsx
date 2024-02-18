import "./globals.css";

import Logo from "./lib/layout/logo";
import Hamburger from "./lib/layout/hamburger";
import Navigation from "./lib/layout/naigation";


export const metadata = {
  title: "Coffeeroasters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] m-auto">

        <section className="flex justify-between items-center mt-[33px] sm:mt-[40px] mx-[23px] sm:mx-[6%] lg:mx-[9%]">
          <Logo/>
          <Hamburger/>
          <Navigation />

        </section>

        {children}


      </body>
    </html>
  );
}
