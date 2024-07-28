import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

const Layout = ({ children ,showHero=false}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

type Props = {
  children: React.ReactNode;
  showHero?:boolean
};

export default Layout;
// AVYLL89J9RYJQ3RA59V4GB7X