import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AppContextProvider } from "@/store/contexts/appContext";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
// import { usePathname } from "next/navigation";

const avenir = localFont({
  src: [
    {
      path: "../../public/assets/fonts/avenir_ff/AvenirLTStd-Roman.otf",
      weight:"600"
    },
    {
      path: "../../public/assets/fonts/avenir_ff/AvenirLTStd-Black.otf",
      weight:"700"
    },
    {
      path: "../../public/assets/fonts/avenir_ff/AvenirLTStd-Book.otf",
      weight:"400"
    },
  ],
  variable: "--font-avenir",
});

// const inter = Inter({ subsets: ["latin"] });
// className={inter.className}
export const metadata: Metadata = {
  title: "TwoTensor Website",
  description: "Website for TwoTensor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const path = usePathname();
  // let bg = "";
  // path === "/" ? (bg = "") : "";
  return (
    <html lang="en">
      <AppContextProvider>
        <body
          className={`overflow-x-clip 2xl:flex 2xl:items-center 2xl:flex-col  bg-darkGreen font-avenir ${avenir.variable}`}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </AppContextProvider>
    </html>
  );
}
