import * as yup from "yup";

const registerSchema = yup
  .object({
    firstName: yup.string().required("Fist name is required"),
    lastName: yup.string().required("last name is required"),
    mobile: yup.string().optional(),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("password is required"),
    verifyPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password does not match"),
  })
  .required();

export default registerSchema;
