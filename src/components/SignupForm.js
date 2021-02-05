import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../hooks/useForm';
import schema from '../validation/signupSchema';

import axios from 'axios';

import {
    Stack,
    Center,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Divider
} from '@chakra-ui/react';

const initialFormValues = {
    username: "",
    password: "",
    full_name: "",
    signup_code: ""
}

function SignupForm() {
    const [ formValues, formErrors, isButtonDisabled, onChange ] = useForm(initialFormValues, schema);
    const [ error, setError ] = useState("");
    const history = useHistory();

    // EVENT HANDLERS
    function onSubmit(e) {
        e.preventDefault();
        // CALL API to submit data
        const { username, password, full_name, signup_code } = formValues;

        let registerData = {
            username,
            password,
            full_name
        };

        // IF user provided a signup code, let's insert that into the object we will post to the server
        if (formValues.signup_code.length > 0) {
            registerData = {
                ...registerData,
                signup_code
            }
        }

        axios.post('https://anywherefitness2.herokuapp.com/api/auth/register', registerData)
            .then(res => {
                // Account created push user to login
                history.push('/login');
            })
            .catch(err => {
                setError(err.response.data.message);
            })
    }

    return (
        <form onSubmit={onSubmit}>
             <Stack bgColor="white" spacing="12px" width="70%" minWidth="320px" margin="0 auto" border="1px solid gainsboro" borderRadius="8px" padding="1rem" marginBottom="20px">
                <FormControl isRequired isInvalid={formErrors.full_name.length > 0 ? true : false}>
                    <FormLabel htmlFor="full_name">Full Name</FormLabel>
                    <Input name="full_name" value={formValues.full_name} onChange={onChange} id="full_name" placeholder="Full Name"  />
                    <FormErrorMessage>{formErrors.full_name}</FormErrorMessage>
                </FormControl>
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
                <FormControl isInvalid={formErrors.signup_code.length > 0 ? true : false}>
                    <FormLabel htmlFor="signup_code">Signup Code</FormLabel>
                    <Input name="signup_code" value={formValues.signup_code} onChange={onChange} id="signup_code" placeholder="Instructor code" />
                    <FormErrorMessage>{formErrors.signup_code}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={error.length > 0 ? true : false}>
                    <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>
                <Center paddingY="12px">
                    <Button
                        border="1px solid gainsboro"
                        fontSize="1.2rem"
                        type="submit"
                        isDisabled={isButtonDisabled}
                    >
                        Register
                    </Button>
                </Center>
                <Divider />
                <Center paddingY="5px">
                    <Button
                        border="1px solid gainsboro"
                        fontSize="1rem"
                        onClick={() => history.push('/login')}
                        colorScheme="facebook"
                    >
                        Go To Login
                    </Button>
                </Center>
            </Stack>
        </form>
    )
}

export default SignupForm
