import {lazy, Suspense} from "react";
import Logo from "../assets/Logo.jpeg";
const AuthForm = lazy(()=>import("../components/Auth/AuthForm"))

const Home = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <Suspense fallback={<div>Loading...</div>}>
        <img
          src={Logo}
          alt="logo"
          className="w-12 h-12 mx-auto  rounded-full"
        />
        </Suspense>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account.
        </h2>
      </div>
      <AuthForm/>
    </div>
  );
};

export default Home;
