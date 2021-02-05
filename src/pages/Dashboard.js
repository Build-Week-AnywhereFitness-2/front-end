import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchClasses, attendClass, fetchMyClasses } from '../actions/index';

import {
    Box,
    Heading,
    Accordion
} from '@chakra-ui/react';

import ClassAccordionItem from '../components/ClassAccordionItem';
import axiosWithAuth from '../utils/axiosWithAuth';

function Dashboard(props) {
    const [user, setUser] = useState({});

    useEffect(() => {
        axiosWithAuth().get('/api/auth/whoami')
            .then(res => {
                setUser({
                    ...user,
                    ...res.data
                });
                props.fetchMyClasses(res.data.id)
            })

        props.fetchClasses();
    }, [])

    return (
        <Box margin="0 auto" width="90%" paddingY="20px">
            <Heading fontSize="3xl" as="h2" textAlign="center">Dashboard</Heading>
            <Box border="1px solid gainsboro" mt="20px" paddingY="10px">
                <Heading fontSize="2xl" as="h3" textAlign="center">All Classes</Heading>
                <Accordion mt="8px">
                    {props.classes &&
                        props.classes.map(cls => {
                            return <ClassAccordionItem key={cls.id} data={cls} onAttend={() => props.attendClass(cls.id, user.id)} />
                        })
                    }
                </Accordion>
            </Box>
            <Box border="1px solid gainsboro" mt="20px" paddingY="10px">
                <Heading fontSize="2xl" as="h3" textAlign="center">My Classes</Heading>
                <Accordion mt="8px">
                    {props.user.classesAttending &&
                        props.user.classesAttending.map(cls => {
                            return <ClassAccordionItem key={cls.id} data={cls} />
                        })
                    }
                </Accordion>
            </Box>
        </Box>
    )
}

function mapStateToProps(state) {
    return {
        classes: state.classes,
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchClasses, attendClass, fetchMyClasses })(Dashboard);
