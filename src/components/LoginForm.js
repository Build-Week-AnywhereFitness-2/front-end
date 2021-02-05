import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../hooks/useForm';
import schema from '../validation/loginSchema';
import axios from 'axios';

import {
    Stack,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button
} from '@chakra-ui/react';


const initialFormValues = {
    username: "",
    password: ""
}

function LoginForm(props) {
    // HOOKS & STATE //
    const [ formValues, formErrors, isButtonDisabled, onChange ] = useForm(initialFormValues, schema);
    const [ error, setError ] = useState("");
    const history = useHistory();

    // EVENT HANDLERS
    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data
        axios.post('https://anywherefitness2.herokuapp.com/api/auth/login', { username: formValues.username, password: formValues.password })
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('token', token);

                history.push('/');
                history.go();
            })
            .catch(err => {
                setError(err.response.data.message);
            })
    }

    return (
        <form onSubmit={onSubmit}>
             <Stack spacing="12px" width="70%" minWidth="320px" margin="0 auto" border="1px solid gainsboro" borderRadius="8px" padding="1rem" marginBottom="20px">
                <FormControl isRequired isInvalid={formErrors.username.length > 0 ? true : false}>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input name="username" value={formValues.username} onChange={onChange} id="username" placeholder="Username" />
                    <FormErrorMessage>{formErrors.username}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={formErrors.password.length > 0 ? true : false}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input type="password" name="password" value={formValues.password} onChange={onChange} id="password" placeholder="Password"  />
                    <FormErrorMessage>{formErrors.password}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={error.length > 0 ? true : false}>
                    <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>
                <Center paddingY="15px">
                    <Button
                        border="1px solid gainsboro"
                        fontSize="1.2rem"
                        type="submit"
                        isDisabled={isButtonDisabled}
                    >
                        Login
                    </Button>
                </Center>
            </Stack>
        </form>
    )
}

export default LoginForm;