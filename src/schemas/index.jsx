import * as Yup from "yup";

export const signupschema = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(6).required("please enter apassword"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
