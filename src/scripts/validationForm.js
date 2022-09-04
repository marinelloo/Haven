import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({

    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(6, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
});
