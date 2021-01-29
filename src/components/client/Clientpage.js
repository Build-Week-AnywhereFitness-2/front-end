import React, { Component, useEffect, useReducer, useState } from "react"
import  reducers,{ initialState } from "../../reducers/index"
import { getClientClasses } from "../../actions/index"
import ClassDisplay from "./ClassDisplay"

function Clientpage (props) {

    const [state, dispatch] = useReducer(reducers, initialState)

    // useEffect(() => {
    //     props.getTrainerClasses();
    // }, [getTrainerClasses])

    return (
        <div>
            <h2>Classes Database</h2>
        <main>
            
            <ClassDisplay dispatch={dispatch} data={state}/>
            <br/>
        </main>
        </div>
        
    )
}

export default Clientpage ;