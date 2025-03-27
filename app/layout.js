import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight:["400","500","600","700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight:["400"],
  subsets: ["latin"],
});


export const metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
     <body className={`${outfit.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
  {children}
</body>
    </html>
  );
}
