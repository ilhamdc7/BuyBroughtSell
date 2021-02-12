import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";


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
