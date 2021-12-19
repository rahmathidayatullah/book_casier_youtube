import React, { useState } from "react";
import ImgLogin from "../../assets/img/sign.png";
import { useForm } from "react-hook-form";
export default function Index() {
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    clearErrors(name);
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {};

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className={`hidden xl:block xl:col-span-2`}>
        <div className="flex justify-end items-center h-full">
          <img src={ImgLogin} alt="image-login" />
        </div>
      </div>
      <div className={`col-span-5 xl:col-span-3`}>
        <div className="h-full flex items-center">
          {/* box login */}
          <div className="shadow-1xl mx-5 xl:mx-0 py-16 px-10 md:px-24 w-full  xl:w-max rounded-2xl">
            {/* form content */}
            <form
              className={`min-w-full xl:min-w-710px`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="font-bold text-3xl">Welcome User!</h1>
              <p className="mt-2 text-base font-bold">
                Codeathome <span className="font-normal">BookStore</span>
              </p>
              <p className="mt-8 text-base">Please sign in first</p>
              <div className="flex flex-col mt-8">
                <input
                  {...register("email", {
                    required: "email tidak boleh kosong",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "format email salah",
                    },
                  })}
                  onChange={handleChange}
                  value={form.email}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="py-4 px-6 rounded-lg shadow-1xl focus:outline-none"
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input
                  {...register("password", {
                    required: "password tidak boleh kosong",
                  })}
                  onChange={handleChange}
                  value={form.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="py-4 px-6 rounded-lg shadow-1xl mt-5 focus:outline-none"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <button
                  disabled={
                    Object.values(form).every((value) => value === "")
                      ? true
                      : false
                  }
                  type="submit"
                  className={`py-4 px-6 rounded-lg mt-12 ${
                    Object.values(form).every((value) => value === "")
                      ? "bg-purple-400"
                      : "bg-purple-700"
                  }  text-white font-bold text-base`}
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
