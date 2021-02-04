import React from "react"
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import UpdateClass from "./UpdateClass"

const ClassCardStyle = styled.div`

font-family:Helvetica, sans-serif;

.buttons{
    display: flex;
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
    margin:0 20%;
    height: 50vh;

    
}
.classes_info{
    display: flex;
    flex-direction: column;
    margin: 1%; 
    justify-content: space-evenly;
    height: 100%

}

h2{
    font-size: 2.5rem;
    // margin: 5% 400%;
    text-decoration: underline;
    
}
p{
    font-size: 1.5rem;
    margin: 5% 1%;
    
}
button{
    background-color: #008CBA; /* Blue */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
}


`

function ClassCard (props) {
    // console.log(props)

    return(
        <ClassCardStyle>
        <div className="classes">
            <div className="classes_info">
                <h2>Name: {props.data.name}</h2>
                <p>Type: {props.data.type}</p>
                <p>Start Time: {props.data.start_time}</p>
                <p>Duration: {props.data.durationHr}</p>
                <p>Intensity: {props.data.intensity_level}</p>
                <p>Location: {props.data.location}</p>
                <p>Registered: {props.data.attendees_amt}</p>
                <p>Max Size: {props.data.max_class_size}</p>
            </div>
            <div className="buttons">
            {/* <Route exact path="/updateclass">
                    <UpdateClass />
            
            </Route> */}
            <Link to="/updateclass/:id">
                <button>
                    Update
                </button>
            </Link>
            <br/>
            <button className="delete_button" onClick={() => props.delClass(props.data.id)}>Delete</button>
            </div>
        </div>
        
        </ClassCardStyle>
    )
}

export default ClassCard