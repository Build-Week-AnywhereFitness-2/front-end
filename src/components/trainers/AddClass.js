import React, { useState } from "react"
import { connect } from "react-redux"
import { postTrainerClasses } from "../../actions/index"
import styled from "styled-components";
// import axiosWithAuth from "../../utils/axiosWithAuth"
import axios from "axios"
import fetchToken from "../../utils/fetchToken"
import axiosWithAuth from "../../utils/axiosWithAuth";



const AddClassCardStyle = styled.div`

font-family:Helvetica, sans-serif;

.classes{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3D434A;
    color: lightgrey;
    margin:0 20%;
    height: 100%;

    
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.form_inputs{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

input {
    width: 40%;
    padding: 5px 10px;
    margin: 0.5% 10px;
    box-sizing: border-box;
    text-align: center;

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


h2{
    color: white;
    font-size: 2.5rem;
    margin: 2% 0;
    text-decoration: underline;
    
}



`

const AddClass = (props) => {

    const initialClassData = {
        name: "",
        type:"",
        start_time:"",
        duration_hour:"",
        intensity_level:"",
        location:"",
        attendees_amt: "",
        max_class_size: "",
    }

    const [classValues, setClassValues] = useState(initialClassData)

    function handleSubmit (e) {
        e.preventDefault();
        const newClass = {
            ...classValues
        };
        // console.log(newClass)
        props.postTrainerClasses(newClass)
        setClassValues(initialClassData)
        
    }

    function handleChange (e) {
        setClassValues({
            ...classValues,
            [e.target.name]: e.target.value
        })
    }

    // const token = fetchToken();
    // console.log(token)

    // const userID = () => {
    //     const token = localStorage.getItem("token");
    
    //     return axios.create({
    //         baseURL: "https://anywherefitness2.herokuapp.com/api/auth/whoami",
    //         headers: {Authorization: token}
    //     })
    // }

    // const getUserID = user => {
    //     const token = localStorage.getItem("token")

    //     axios.get("https://anywherefitness2.herokuapp.com/api/auth/whoami",
    //     {headers: {Authorization: token}})
    //     .then(res => {
    //         console.log(res)
    //     })

    // }

    // const getTClass = () => {
    //     const token = localStorage.getItem("token")

    //     axios.post("https://anywherefitness2.herokuapp.com/api/classes",
    //     {
    //         "name": "Walking",
    //         "type":"1",
    //         "start_time":"12:30",
    //         "duration_hour":"1",
    //         "intensity_level":"1",
    //         "location":"Mount Rainier, WA",
    //         "attendees_amt": "10",
    //         "max_class_size": "100"
    //     },
    //     {headers: {Authorization: token}})
    //     .then(res => {
    //         console.log(res)
             
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
        
    // }

    
    

    return (
        <AddClassCardStyle>
        <div>
            <div className="classes">
                <h2>Add A Class</h2>
            
            <br/>
            {/* <span onClick={getUserID}>USERID</span>
            <span onClick={getTClass}>data</span> */}
            <form  onSubmit={handleSubmit}>
                <div className="form_inputs">
                    <input
                    onChange={handleChange}
                    name="name"
                    id="name"
                    value={classValues.name}
                    placeholder="Name"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="type"
                    id="type"
                    value={classValues.type}
                    placeholder="Type"
                    type="number"

                    min="1"
                    max="3"
                    pattern="^[1-3]*$"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="start_time"
                    id="start_time"
                    value={classValues.start_time}
                    placeholder="Time"
                    type="string date"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="duration_hour"
                    id="duration_hour"
                    value={classValues.duration_hour}
                    placeholder="Duration"

                    type="number"
                    step="0.1"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="intensity_level"
                    id="intensity_level"
                    value={classValues.intensity_level}
                    placeholder="Intensity Level"
                    type="number"
                    min="1"
                    max="3"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="location"
                    id="location"
                    value={classValues.location}
                    placeholder="Location"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="attendees_amt"
                    id="attendees_amt"
                    value={classValues.attendees_amt}
                    placeholder="Number Registered"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="max_class_size"
                    id="max_class_size"
                    value={classValues.max_class_size}
                    placeholder="Max Class Size"
                    />
                    <br/>

                </div>
                <br/>

                <button type="submit">Add Class</button>

            </form>
            </div>

        </div>
        </AddClassCardStyle>
    )
}

// const mapStateToProps = state => {
//     return {
//         classes: state.classes
//     }
// }

// const mapDispatchToProps = {postTrainerClasses}

export default connect(null , { postTrainerClasses })(AddClass) 

