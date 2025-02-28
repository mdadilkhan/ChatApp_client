import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const MobileItem = ({ href, label, icon: Icon, active, onClick }) => {
    console.log(active,label);
    
  return (
    <Link
      to={href}
      onClick={onClick}
      className={clsx(
        `group
         flex
         gap-x-3
         text-sm
         leading-6
         font-semibold
         w-full
         justify-center
         p-4
         text-gray-500
         hover:text-black
         hover:bg-gray-100`,
         active && `bg-gray-100 text-[#000]`
      )}
    >
      <Icon className="h-6 w-6" />
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default MobileItem;
