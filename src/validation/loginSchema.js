import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().required('Must Include Username'),
    password: yup.string().required('Must Include A Valid Password')
})

export default formSchema;