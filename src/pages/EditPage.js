import React, { Component, useEffect, useReducer, useState } from "react"
import reducers, { initialState } from "../reducers/index"
import { attendClass, deleteClientClass, fetchMyClasses, fetchClasses } from "../actions/index"
import styled from "styled-components";
import { connect } from "react-redux"
import axiosWithAuth from "../utils/axiosWithAuth"
import EditCA from "../components/EditCA"

import {
    Box,
    Heading,
    Accordion,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'

const EditPageStyle = styled.div`
.trainer_main{
    font-size: 5rem;
    text-align: center;
    text-decoration: underline;
    margin: 3% 0;
}
`

function EditPage(props) {

    const [state, dispatch] = useReducer(reducers, initialState)
    const [user, setUser] = useState({});

    useEffect(() => {
        axiosWithAuth().get('/api/auth/whoami')
            .then(res => {
                setUser({
                    ...user,
                    ...res.data
                });


                props.fetchMyClasses(res.data.id);
            })
    }, [])

    function onClickDeleteClientClass(id) {
        props.deleteClientClass(id);
    };


    return (
        <EditPageStyle>
            <div className="trainer_main">
                <h1>Your Classes</h1>
            </div>
            <div>
                <main>
                    <Accordion mt="8px">
                        {props.classes &&
                            props.classes.map(cls => {
                                return <EditCA key={cls.id} onDelete={() => props.deleteClientClass(cls.id)} data={cls} />
                            })
                        }
                    </Accordion>
                    <Box margin="0 auto" width="90%" paddingY="20px">
                        <Heading fontSize="3xl" as="h2" textAlign="center">Availible Classes</Heading>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Search By
                        </MenuButton>
                            <MenuList>
                                <MenuItem>Class Time</MenuItem>
                                <MenuItem>Class Date</MenuItem>
                                <MenuItem>Class Duration</MenuItem>
                                <MenuItem>Class Type</MenuItem>
                                <MenuItem>Intensity Level</MenuItem>
                                <MenuItem>Class Duration</MenuItem>
                            </MenuList>
                        </Menu>
                        <Box borderTop="1px solid gainsboro" mt="20px" paddingY="10px">
                            <Accordion mt="8px">
                                {props.classes &&
                                    props.classes.map(cls => {
                                        return <EditCA key={cls.id} onAttend={() => props.attendClass(cls.id)} data={cls} />
                                    })
                                }
                            </Accordion>
                        </Box>
                    </Box>

                </main>
            </div>
        </EditPageStyle>

    )
}

function mapStateToProps(state) {
    return {
        classes: state.classes,
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchMyClasses, deleteClientClass })(EditPage)