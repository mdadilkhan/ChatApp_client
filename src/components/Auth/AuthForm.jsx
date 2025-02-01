import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import AuthSocialButton from "../AuthSocailButton/AuthSocialButton";
import { setUser, setError, setLoading } from "../../store/slices/authSlices";
//variables
const API_URL = import.meta.env.VITE_API_URI;

//value can be two only either login or register
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

const AuthForm = () => {
  const { loginWithPopup, logout, getIdTokenClaims } = useAuth0();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authDetails);
  const [variant, setVariant] = useState(LOGIN);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant(REGISTER);
    } else {
      setVariant(LOGIN);
    }
  }, [variant]);

  const onSubmit = (data) => {
    dispatch(setLoading(true));
    if (variant === LOGIN) {
      axios
        .post(`${API_URL}/auth/login`, data)
        .then((res) => {
          if (res.status === 200) {
            dispatch(setLoading(false));
            dispatch(setUser(res.data.data));
            toast.success(res.data.message);
            navigate("/home");
          }
        })
        .catch((err) => {
          dispatch(setLoading(true));
          dispatch(setError(true));
          toast.error(err.response.data.message);
        })
        .finally(() => {
          dispatch(setError(false));
          dispatch(setLoading(false));
        });
    }

    if (variant === REGISTER) {
      axios
        .post(`${API_URL}/auth/register`, data)
        .then((res) => {
          if (res.status === 200) {
            dispatch(setLoading(false));
            setVariant(LOGIN);
            toast.success(res.data.message);
          }
        })
        .catch((err) => {
          dispatch(setLoading(true));
          dispatch(setError(true));
          toast.error(err.response.data.message);
        })
        .finally(() => {
          dispatch(setError(false));
          dispatch(setLoading(false));
        });
    }
  };

  const SocialAction = async () => {
    try {
      dispatch(setLoading(true));
      // Redirect to Auth0 login
      await loginWithPopup();
      // Once redirected back, check if user exists
      const claims = await getIdTokenClaims(); // Get user info

      if (!claims) {
        console.error("User claims not found!");
        return;
      }

      const data = {
        name: claims.name,
        email: claims.email,
        provider: claims.sub.split("|")[0],
      };

      axios
        .post(`${API_URL}/auth/socialLogin`, data)
        .then((res) => {
          if (res.status === 200) {
            dispatch(setLoading(false));
            dispatch(setError(false));
            dispatch(setUser(res.data.data));
            toast.success(res.data.message);
            navigate("/home");
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
      dispatch(setError(false));
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 ">
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
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => SocialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => SocialAction("google")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === LOGIN
              ? "Don't have an account?"
              : "Already have an account?"}
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
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default AuthForm;
