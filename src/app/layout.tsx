
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/store/contexts/appContext";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
// import { usePathname } from "next/navigation";

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
        <body>
          <NavBar />
          {children}
          <Footer />
        </body>
      </AppContextProvider>
    </html>
  );
}
