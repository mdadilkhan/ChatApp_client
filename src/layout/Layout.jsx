import { lazy, Suspense } from "react";

const MobileFooter =lazy(()=>import("../components/Sidebar/MobileFooter"))
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));
// const Header = lazy(() => import("../components/Header/Header"));
const Layout = ({ children }) => {
  return (
    <>
      {/* <div className="">
        <Header />
      </div> */}
      <div className="flex">
        <MobileFooter/>
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 h-screen">{children}</main>
      </div>
    </>
  );
};

export default Layout;
