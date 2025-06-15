// src / components / layout / MainLayout.tsx;
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
