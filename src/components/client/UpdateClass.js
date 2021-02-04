import axios from "axios";
import React, {useState, useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

const UpdateClassCardStyle = styled.div`

font-family:Helvetica, sans-serif;

.classes{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3D434A;
    color: lightgrey;
    margin:5% 20%;
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
const UpdateClass = (props) => {
    console.log(props)

    const initialClassData = {
        name: "",
        type:"",
        start_time:"",
        durationHr:"",
        intensity_level:"",
        location:"",
        attendees_amt: "",
        max_class_size: "",
        error:""
    }

    const { push } = useHistory();
    const { id } = useParams();

    const [classValues, setClassValues] = useState(initialClassData)

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then((res) => {
            console.log(res.data)
            setClassValues(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id, props.classes])

    const handleChange = e => {
        e.persist();
        
        setClassValues({
            ...classValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        axios.put(`http://localhost:5000/api/movies/${id}`, classValues)
        .then((res) => {
            console.log(res.data)
            props.setClassValues(res.data);
            push("/")
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <UpdateClassCardStyle>
        <div className="classes">
            
            <h2>UPDATE CLASS</h2>
            <form onSubmit={handleSubmit}>
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
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="start_time"
                    id="start_time"
                    value={classValues.start_time}
                    placeholder="Start Time"
                    />
                    <br/>

                    <input
                    onChange={handleChange}
                    name="durationHr"
                    id="durationHr"
                    value={classValues.durationHr}
                    placeholder="Duration"
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
                
                
                

            </form>
        </div>
        </UpdateClassCardStyle>
    )
}

export default UpdateClass;