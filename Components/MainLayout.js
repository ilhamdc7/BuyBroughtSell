import Header from "./Header/header";

function MainLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

export default MainLayout;
