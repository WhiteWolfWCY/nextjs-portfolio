import "./globals.css";
import localFont from "next/font/local"
import Header from "../app/components/Header/Header";
import Footer from '../app/components/Footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';

// setting up the fonts to be usdd
const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Recoleta-Black.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Recoleta-Medium.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Recoleta-Light.ttf",
      weight: "200",
    },
  ],
  variable: "--font-Recoleta-Black",
});

export const metadata = {
  title: "Portfolio",
  description: "Mateusz's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
