import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import profileSchema from "../validationSchemas/profileSchema";


export default function Profile() {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm({
        resolver: yupResolver(profileSchema),

    });

    return (
        <form onSubmit={handleSubmit()}>
            <div className="space-y-12 sm:space-y-16">

                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            First name
                        </label>
                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                {...register("firstName")}
                                id="first-name"

                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.firstName && (
                            <span className="text-xs text-red-500">
                                {errors.firstName.message}
                            </span>
                        )}
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            Last name
                        </label>
                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                {...register("lastName")}
                                id="last-name"

                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.lastName && (
                            <span className="text-xs text-red-500">
                                {errors.lastName.message}
                            </span>
                        )}
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            Email address
                        </label>
                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                            <input
                                id="email"
                                {...register("email")}
                                type="email"

                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                            />
                        </div>
                        {errors.email && (
                            <span className="text-xs text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                            Mobile
                        </label>
                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                            <input
                                id="mobile"
                                {...register("email")}
                                type="mobile"

                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                            />
                        </div>

                    </div>










                </div>



            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
