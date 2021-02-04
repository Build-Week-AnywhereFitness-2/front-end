import { getClientClasses } from "../../actions/index"
import ClassDisplay from "./ClassDisplay"
import React, { Component, useEffect, useReducer, useState } from "react"
import  reducers,{ initialState } from "../../reducers/index"
import styled from "styled-components";
import { deleteClientClass } from "../../actions/index"

const ClientPageStyle = styled.div `

.client_main{
    font-size: 5rem;
    text-align: center;
    text-decoration: underline;
    margin: 3% 0;
}

`

function ClientPage (props) {

    const [state, dispatch] = useReducer(reducers, initialState)

    // useEffect(() => {
    //     props.getClientClasses();
    // }, [getClientClasses])
    function onClickDeleteClientClass(id) {
        props.deleteClientClass(id);
    };


    return (
        <ClientPageStyle>
        <div className="client_main">
            <h1>Your Classes</h1>
        </div>
        <div>
        <main> 
            <div></div>
            <br/>
            <ClassDisplay dispatch={dispatch} data={state} delClass={onClickDeleteClientClass}/>
            
            
        </main>
        </div>
        </ClientPageStyle>
        
    )
}

export default ClientPage ;