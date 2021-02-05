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

    const newClassData = {
        name: "Nature Walk",
        type: 1,
        start_time:"15:30",
        duration_hour: 1,
        intensity_level: 1,
        location:"Mount Rainier, WA",
        attendees_amt: 0,
        max_class_size: 100
    }

    const [classValues, setClassValues] = useState(newClassData)
    const [user, setUser] = useState({})

    function handleSubmit (e) {
        e.preventDefault();
        axiosWithAuth().get('/api/auth/whoami')
        .then(res => {
            setUser({
                ...user,
                ...res.data
            });
            console.log(res.data)

            props.postTrainerClasses(classValues);
        })

    // props.postTrainerClasses();
    }

    function handleChange (e) {
        setClassValues({
            ...classValues,
            [e.target.name]: e.target.value
        })
    }

    // useEffect(() => {
    //     axiosWithAuth().get('/api/auth/whoami')
    //         .then(res => {
    //             setUser({
    //                 ...user,
    //                 ...res.data
    //             });
    //             console.log(res.data.id)
              
    //             props.getTrainerClasses(res.data.id);
    //         })

    //     props.getTrainerClasses();
    // }, [])

    // const token = fetchToken();
    // console.log(token)

    const userID = () => {
        const token = localStorage.getItem("token");
    
        return axios.create({
            baseURL: "https://anywherefitness2.herokuapp.com/api/auth/whoami",
            headers: {Authorization: token}
        })
    }

    const getUserID = user => {
        const token = localStorage.getItem("token")

        axios.get("https://anywherefitness2.herokuapp.com/api/auth/whoami",
        {headers: {Authorization: token}})
        .then(res => {
            console.log(res)
        })

    }

    return (
        <AddClassCardStyle>
        <div>
            <div className="classes">
                <h2>Add A Class</h2>
            
            <br/>
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

const mapStateToProps = state => {
    return {
        classes: state.classes,
        user: state.user
    }
}

// const mapDispatchToProps = {postTrainerClasses}

export default connect(mapStateToProps , { postTrainerClasses })(AddClass)

