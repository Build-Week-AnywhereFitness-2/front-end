import * as yup from 'yup';

const formSchema = yup.object().shape({
    full_name: yup.string().required('Must Include Full Name'),
    username: yup.string().required('Must Include Username'),
    password: yup.string().required('Must Include A Valid Password'),
    signup_code: yup.string()
})

export default formSchema;