import React, { lazy } from "react";
import useRoutes from "../../hooks/useRoutes";
import useConversation from "../../hooks/useConversation";

const MobileItem = lazy(() => import("./MobileItem"));
const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="
     fixed
     justify-between
     w-full
     bottom-0
     z-40
     flex
     items-center
     bg-white
     border-t-[1px]
     lg:hidden
     "
    >
      {routes.map((route) => (
        <MobileItem
          key={route.label}
          href={route.href}
          label={route.label}
          icon={route.icon}
          active={route.active}
          onClick={route.onCLick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
