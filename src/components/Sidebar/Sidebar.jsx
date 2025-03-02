// import React,{lazy} from "react";
// const DesktopSidebar = lazy(()=>import("./DesktopSidebar"))

// const Sidebar = ({ children }) => {
//   return (
//     <div className="h-full">
//       <DesktopSidebar/>
//       <main className="lg:pl-20 h-full">
//          {children}
//       </main>
//     </div>
//   );
// };

// export default Sidebar;


import { lazy, Suspense } from "react";

const DesktopSidebar = lazy(()=>import("./DesktopSidebar"))

const Sidebar = () => {
  return (
    <div className="w-80  lg:block h-full">
        <DesktopSidebar />
    </div>
  );
};

export default Sidebar;
