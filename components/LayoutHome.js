import React from "react";
//Componentes
import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutHome = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="bg-no-repeat bg-cover min-h-full bg-zinc-100 h-screen">
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default LayoutHome;
