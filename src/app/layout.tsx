import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
