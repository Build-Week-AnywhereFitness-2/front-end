import React, { useState } from "react"
import { connect } from "react-redux"
import { postTrainerClasses } from "../../actions/index"



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
        <div>
            <div>
                <h2>Add Class</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    onChange={handleChange}
                    name="name"
                    id="name"
                    value={classValues.name}
                    placeholder="Name"
                    />

                    <input
                    onChange={handleChange}
                    name="type"
                    id="type"
                    value={classValues.type}
                    placeholder="Type"
                    />

                    <input
                    onChange={handleChange}
                    name="start"
                    id="start"
                    value={classValues.start}
                    placeholder="Start Time"
                    />

                    <input
                    onChange={handleChange}
                    name="duration"
                    id="duration"
                    value={classValues.duration}
                    placeholder="Duration"
                    />

                    <input
                    onChange={handleChange}
                    name="intensity"
                    id="intensity"
                    value={classValues.intensity}
                    placeholder="Intensity Level"
                    />

                    <input
                    onChange={handleChange}
                    name="location"
                    id="location"
                    value={classValues.location}
                    placeholder="Location"
                    />

                    <input
                    onChange={handleChange}
                    name="registered"
                    id="registered"
                    value={classValues.registered}
                    placeholder="Number Registered"
                    />

                    <input
                    onChange={handleChange}
                    name="max"
                    id="max"
                    value={classValues.max}
                    placeholder="Max Class Size"
                    />

                </div>

                <button type="submit">Add Class</button>

            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}

const mapDispatchToProps = {postTrainerClasses}

export default connect(mapStateToProps,mapDispatchToProps)(AddClass) 
