import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import resetPasswordSchema from "../validationSchemas/resetPasswordSchema";

function ResetPassword() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),

  });
  return (
    <>
      <form onSubmit={handleSubmit()}>
        <div className="flex flex-col justify-center items-center h-screen gap-4">
          <h2 className="text-black font-bold text-[25px]">Reset Password</h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-black font-small text-[20px]">Please enter your email address to reset your password.</h3>
            <div>
              <input
                id="lastName"
                {...register("email")}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <button type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Request reset Password
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ResetPassword;
