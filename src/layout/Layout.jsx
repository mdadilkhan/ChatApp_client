// import { lazy } from "react"

// const Sidebar = lazy(()=>import('../components/Sidebar/Sidebar'))
// const Layout = ({children}) => {
//   return (
//     <Sidebar>
//       <div className="h-full">
//        {children}
//       </div>
//     </Sidebar>

//   )
// }

// export default Layout

import { lazy, Suspense } from "react";

const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));
const Header = lazy(() => import("../components/Header/Header"));
const Layout = ({ children }) => {
  return (
    <>
      {/* <div className="">
        <Header />
      </div> */}
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 h-screen">{children}</div>
      </div>
    </>
  );
};

export default Layout;
