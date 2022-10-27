import * as Yup from "yup";

export const signinschema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(6).required("please enter apassword"),
});
