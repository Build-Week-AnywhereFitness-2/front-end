import React, { useState } from "react"
import { connect } from "react-redux"
import { postTrainerClasses } from "../../actions/index"
import styled from "styled-components";



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
        start:"",
        duration:"",
        intensity:"",
        location:"",
        registered:"",
        max: "",
        error:""
    }

    const [classValues, setClassValues] = useState(initialClassData)

    function handleSubmit (e) {
        e.preventDefault();
        const newClass = {
            ...classValues
        };
        props.postTrainerClasses(newClass)
        setClassValues(initialClassData)
    }

    function handleChange (e) {
        setClassValues({
            ...classValues,
            [e.target.name]: e.target.value
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
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="start"
                    id="start"
                    value={classValues.start}
                    placeholder="Start Time"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="duration"
                    id="duration"
                    value={classValues.duration}
                    placeholder="Duration"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="intensity"
                    id="intensity"
                    value={classValues.intensity}
                    placeholder="Intensity Level"
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
                    name="registered"
                    id="registered"
                    value={classValues.registered}
                    placeholder="Number Registered"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="max"
                    id="max"
                    value={classValues.max}
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
        classes: state.classes
    }
}

const mapDispatchToProps = {postTrainerClasses}

export default connect(mapStateToProps,mapDispatchToProps)(AddClass) 
