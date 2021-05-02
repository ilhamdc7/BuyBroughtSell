import Header from "./Header/Header"
import MainContainer from "./MainContainer/MainContainer";
import React from "react";



function MainLayout({ children }) {
  return (
    <>


      <Header />

      {children}

      <MainContainer />

    </>
  );
}

export default MainLayout;
