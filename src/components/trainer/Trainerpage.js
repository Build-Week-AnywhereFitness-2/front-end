import React, { Component, useEffect, useReducer, useState } from "react"
import  reducers,{ initialState } from "../../reducers/index"
import AddClass from "./AddClass"
import { getTrainerClasses } from "../../actions/index"
import ClassDisplay from "./ClassDisplay"
import styled from "styled-components";
import UpdateClass from "./UpdateClass"
import { deleteTrainerClass } from "../../actions/index"
import {connect} from "react-redux"

const TrainerPageStyle = styled.div `

.trainer_main{
    font-size: 5rem;
    text-align: center;
    text-decoration: underline;
    margin: 3% 0;
}

`

function TrainerPage (props) {
    console.log(props)

    const [state, dispatch] = useReducer(reducers, initialState)

    useEffect(() => {
        props.getTrainerClasses();
    }, [getTrainerClasses])
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
            <ClassDisplay dispatch={dispatch} data={state} delClass={onClickDeleteTrainerClass}/>
            
            
        </main>
        </div>
        </TrainerPageStyle>
        
    )
}

function mapStateToProps(state) {
    return {
        classes: state.classes
    }
}

export default connect(mapStateToProps, { getTrainerClasses })(TrainerPage)