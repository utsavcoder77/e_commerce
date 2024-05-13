import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Logo from "../Components/Logo";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitData(data) {
    console.log(data);
  }

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Logo width="150px" />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register using your personal details
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Already a member?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Login to your account
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div></div>
              <div>
                <form onSubmit={handleSubmit(submitData)} className="space-y-6">
                  <div className="flex gap-10">
                    <div className="w-full">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name*
                      </label>
                      <div className="mt-2">
                        <input
                          id="firstName"
                          {...register("firstName")}
                          type="text"
                          autoComplete="firstName"
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name*
                      </label>
                      <div className="mt-2">
                        <input
                          id="lastName"
                          {...register("lastName")}
                          type="text"
                          autoComplete="lastName"
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mobile
                    </label>
                    <div className="mt-2">
                      <input
                        id="mobile"
                        {...register("mobile")}
                        type="text"
                        autoComplete="mobile"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email*
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password*
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        {...register("password")}
                        type="password"
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Register
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-sm leading-6">
                    <Link
                      to="/register"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Back to Home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1691096671143-d05c501339bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
