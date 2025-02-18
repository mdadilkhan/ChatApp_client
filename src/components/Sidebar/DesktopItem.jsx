import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
const DesktopItem = ({ href, label, icon: Icon, active, onClick }) => {
  console.log(active);

  return (
    <li onClick={onClick}>
      <Link
        to={href}
        className={clsx(
          `
             group
             flex
             gap-x-3
             rounded-md
             p-3
             text-sm
             leading-6
             font-semibold
             text-gray-500
             hover:text-black
             hover:bg-gray-100
`,
          active && `bg-gray-100 text-black`
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
