import "./globals.css";


export const metadata = {
  title: "Coffeeroasters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
