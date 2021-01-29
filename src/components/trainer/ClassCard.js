import React from "react"

function ClassCard (props) {

    return(
        <div>
            <h2>Name: {props.data.name}</h2>
            <p>Type: {props.data.type}</p>
            <p>Start Time: {props.data.start}</p>
            <p>Duration: {props.data.duration}</p>
            <p>Intensity: {props.data.intensity}</p>
            <p>Location: {props.data.location}</p>
            <p>Number of Registered: {props.data.registered}</p>
            <p>Max Class Size: {props.data.max}</p>
            
        </div>
    )
}

export default ClassCard