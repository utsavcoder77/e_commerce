import * as yup from "yup";

const profileSchema = yup
    .object({
        firstName: yup.string().required("Fist name is required"),
        lastName: yup.string().required("last name is required"),
        mobile: yup.string().optional(),
        email: yup.string().email().required("Email is required"),

    })
    .required();

export default profileSchema;
