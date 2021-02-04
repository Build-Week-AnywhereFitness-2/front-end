import * as yup from 'yup';

const formSchema = yup.object().shape({
    full_name: yup.string().required('Must Include Full Name'),
    username: yup.date().required('Must Include Username'),
    password: yup.string().required('Must Include A Valid Password')
})

export default formSchema;