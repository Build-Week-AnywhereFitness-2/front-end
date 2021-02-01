import React, { Component, useEffect, useReducer, useState } from "react"
import  reducers,{ initialState } from "../../reducers/index"
import AddClass from "./AddClass"
import { getTrainerClasses } from "../../actions/index"
import ClassDisplay from "./ClassDisplay"
import styled from "styled-components";

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

    // useEffect(() => {
    //     props.getTrainerClasses();
    // }, [getTrainerClasses])

    return (
        <TrainerPageStyle>
        <div className="trainer_main">
            <h1>Your Classes</h1>
        </div>
        <div>
        <main>
            <AddClass dispatch={dispatch} />
            <br/>
            <ClassDisplay dispatch={dispatch} data={state}/>
            
            
        </main>
        </div>
        </TrainerPageStyle>
        
    )
}

export default TrainerPage