import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import AuthSocialButton from "../AuthSocailButton/AuthSocialButton";
import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
//value can be two only either login or register
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState(LOGIN);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant(REGISTER);
    } else {
      setVariant(LOGIN);
    }
  }, [variant]);

  const onSubmit = (data) => {
    setIsLoading(true);
    if (variant === LOGIN) {
      //axios
    }
    if (variant === REGISTER) {
      //axios
    }

    // console.log(data);
  };

  const SocialAction = (type) => {
    setIsLoading(true);
    console.log(type);
    

    // Social Authentication
  };


  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === REGISTER && (
            <Input
              id="name"
              label="Name"
              type="text"
              register={register}
              errors={errors}
            />
          )}

          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === LOGIN ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
             <AuthSocialButton icon={BsGithub} onClick={()=>SocialAction('github')}/>
             <AuthSocialButton icon={BsGoogle} onClick={()=>SocialAction('google')}/>
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === LOGIN ? "Don't have an account?" : "Already have an account?"}
          </div>
          <div>
            <button
              type="button"
              onClick={toggleVariant}
              className="underline cursor-pointer"
            >
              {variant === LOGIN ? "Register" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
