import React, { Component, useEffect, useReducer, useState } from "react"
import  reducers,{ initialState } from "../../reducers/index"
import AddClass from "./AddClass"
import { getTrainerClasses } from "../../actions/index"
import ClassDisplay from "./ClassDisplay"
import styled from "styled-components";
// import UpdateClass from "./UpdateClass"
// import { deleteTrainerClass } from "../../actions/index"
import {connect} from "react-redux"
import axiosWithAuth from "../../utils/axiosWithAuth"
import TrainerClassAccordionItem from "./TrainerClassAccordion"

import {
    Box,
    Heading,
    Accordion
} from '@chakra-ui/react';

const TrainerPageStyle = styled.div `

.trainer_main{
    font-size: 5rem;
    text-align: center;
    text-decoration: underline;
    margin: 3% 0;
}

`

function TrainerPage (props) {

    const [state, dispatch] = useReducer(reducers, initialState)
    const [user, setUser] = useState({});
    console.log(user)

    useEffect(() => {
        axiosWithAuth().get('/api/auth/whoami')
            .then(res => {
                setUser({
                    ...user,
                    ...res.data
                });
                console.log(res.data.id)
              
                props.getTrainerClasses(res.data.id);
            })

        props.getTrainerClasses();
    }, [])

    function onClickDeleteTrainerClass(id) {
        props.deleteTrainerClass(id);
    };


    return (
        <TrainerPageStyle>
        <div className="trainer_main">
            <h1>Your Classes</h1>
        </div>
        <div>
        <main>
            <AddClass dispatch={dispatch} />
            
            <br/>
        <Box margin="0 auto" width="90%" paddingY="20px">
            <Heading fontSize="3xl" as="h2" textAlign="center">Your Classes</Heading>
            <Box borderTop="1px solid gainsboro" mt="20px" paddingY="10px">
                <Accordion mt="8px">
                    {props.classes &&
                        props.classes.map(cls => {
                            return <TrainerClassAccordionItem key={cls.id} data={cls}  />
                        })
                    }
                </Accordion>
            </Box>
            </Box>
        
        </main>
        </div>
        </TrainerPageStyle>
        
    )
}

function mapStateToProps(state) {
    return {
        classes: state.classes,
        user: state.user
    }
}

export default connect(mapStateToProps, { getTrainerClasses })(TrainerPage)
