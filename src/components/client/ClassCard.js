import React from "react"
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import UpdateClass from "./UpdateClass"

const ClassCardStyle = styled.div`

font-family:Helvetica, sans-serif;

.buttons{
    display: flex;
    align-items: center;
    justify-content: center;
}
.delete_button{
    margin-left: 5%;
}
.classes{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #3D434A;
    color: lightgrey;
    height: auto;

    
}
.classes_info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 90%;

}

h2{
    font-size: 2.5rem;
    text-decoration: underline;
    
}
p{
    font-size: 1.5rem;
    margin: 1% 1%;
    
}
button{
    background-color: #008CBA; /* Blue */
    border: none;
    color: white;
    padding: 1em 20rem;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    
}


`



function ClassCard (props) {

    return(
        <ClassCardStyle>
        <div className="classes">
            <h2 className="classes_info">Name: {props.data.name} </h2>
            <p>Type: {props.data.type}</p>
            <p>Start Time: {props.data.start}</p>
            <p>Duration: {props.data.duration}</p>
            <p>Intensity: {props.data.intensity}</p>
            <p>Location: {props.data.location}</p>
            <p>Number of Registered: {props.data.registered}</p>
            <p>Max Class Size: {props.data.max}</p>
            
        </div>
        <div className="buttons">
            <br/>
            <button className="delete_button" onClick={() => props.onClickDeleteTrainerClass(props.data.id)}>Delete</button>
            </div>
        </ClassCardStyle>
    )
}

export default ClassCard