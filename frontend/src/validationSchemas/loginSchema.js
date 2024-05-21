import * as yup from "yup";

const loginSchema = yup
    .object({
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("password is required"),

    })
    .required();

export default loginSchema;
