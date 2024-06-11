import * as yup from "yup";

const resetPasswordSchema = yup
    .object({
        email: yup.string().email().required("Email is required"),

    })
    .required();

export default resetPasswordSchema;