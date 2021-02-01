import React from "react"
import styled from "styled-components";

const ClassCardStyle = styled.div`

font-family:Helvetica, sans-serif;

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


`

function ClassCard (props) {

    return(
        <ClassCardStyle>
        <div className="classes">
            <div className="classes_info">
                <h2>Name: {props.data.name}</h2>
                <p>Type: {props.data.type}</p>
                <p>Start Time: {props.data.start}</p>
                <p>Duration: {props.data.duration}</p>
                <p>Intensity: {props.data.intensity}</p>
                <p>Location: {props.data.location}</p>
                <p>Registered: {props.data.registered}</p>
                
                <p>Max Size: {props.data.max}</p>
            </div>
            
        </div>
        </ClassCardStyle>
    )
}

export default ClassCard