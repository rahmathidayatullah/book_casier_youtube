import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImgLogin from "../../assets/img/sign.png";
import { useForm } from "react-hook-form";
import { createLogin } from "../../features/auth/actions";
import { useNavigate } from "react-router-dom";
import { CLEAR_STATUS } from "../../features/auth/constants";
export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    clearErrors(name);
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    dispatch(createLogin(form));
  };

  useEffect(() => {
    if (auth.statusPost === "success") {
      navigate("/dashboard");
    }
    if (auth.statusPost === "error") {
      alert("password atau email anda salah");
      dispatch({
        type: CLEAR_STATUS,
      });
    }
  }, [auth.statusPost]);
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="hidden 2xl:block 2xl:col-span-2">
        <div className="h-full flex items-center justify-end">
          <img src={ImgLogin} alt="image_login" />
        </div>
      </div>
      <div className="col-span-5 2xl:col-span-3">
        <div className="h-full flex items-center justify-center">
          {/* box form login */}
          <div className="shadow-1xl py-10 md:py-20 px-5 md:px-24 rounded-2xl w-full md:w-max mx-5 md:mx-0">
            {/* form */}
            <form
              className="min-w-full md:min-w-466px w-full md:w-466px"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="font-bold text-3xl">Welcome User!</h1>
              <p className="font-bold text-base mt-2 text-violet-purple">
                Codeathome <span className="font-normal">BookStore</span>
              </p>
              <p className="mt-8 text-base">Please sign in first</p>

              <div className="flex flex-col mt-8">
                <input
                  {...register("email", {
                    required: "email tidak boleh kosong",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "format email tidak benar",
                    },
                  })}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-2 text-red-dragon">{errors.email.message}</p>
                )}
                <input
                  {...register("password", {
                    required: "password tidak boleh kosong",
                  })}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="py-4 px-6 text-base rounded-lg shadow-1xl mt-5 focus:outline-none"
                />
                {errors.password && (
                  <p className="mt-2 text-red-dragon">
                    {errors.password.message}
                  </p>
                )}
                <button
                  type="submit"
                  className={`py-4 px-6 text-base font-bold rounded-lg shadow-1xl text-white mt-12 ${
                    Object.values(form).every((value) => value !== "")
                      ? "bg-violet-purple"
                      : "bg-soft-purple cursor-not-allowed"
                  }`}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
