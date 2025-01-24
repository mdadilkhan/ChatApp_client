import clsx from "clsx";
import React from "react";

const Input = ({ label, id, type, required, register, errors, disabled }) => {
  return (
    <div>
      <div className="mt-6">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-7900"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            type={type}
            id={id}
            autoComplete={id}
            disabled={disabled}
            {...register(id, { required })}
            // className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            className={clsx(`
                form-input
                block w-full
                rounded-md 
                border-0
                py-1.5
              text-gray-900
                shadow-sm 
                ring-1 
                ring-inset 
              ring-gray-300 
              placeholder:text-gray-400
                focus:ring-2
                focus:ring-inset
                focus:ring-sky-600
                sm:text-sm
                sm:leading-6
                `,errors[id] && " ring-rose-500",disabled && "opacity-50 cursor-default bg-gray-100")}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
