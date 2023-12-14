import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/store/contexts/appContext";
import NavBar from "@/components/NavBar";

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
  return (
    <html lang="en">
      <AppContextProvider>
        <body >
          <NavBar />
          {children}
        </body>
      </AppContextProvider>
    </html>
  );
}
