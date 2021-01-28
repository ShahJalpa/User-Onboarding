import * as yup from 'yup';

export default yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be atleast 3 characters long"),
    email: yup
      .string()
      .email("please enter valid email address")
      .required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "password must be minimum 8 character long"),
    termsOfService: yup
      .boolean()
      .required("please agree the terms of services")
      //.oneOf([true], "must accept terms and conditions"),
});