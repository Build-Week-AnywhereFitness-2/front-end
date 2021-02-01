import React from "react"
import axiosWithAuth from "../../utils/axiosWithAuth"

class TrainerLogin extends React.Component {

    state={
        trainerInfo: {
            username: "",
            password:"",
            fullname:"",
        }

    }

    handleChange = e => {
        this.setState({
            trainerInfo: {
                ...this.state.trainerInfo,
                [e.target.name]: e.target.value
            }
        })
    }
    
    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("", this.state.trainerInfo)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload)
            this.props.history.push("/trainerpage")
        })
        .catch (err => {
            console.log(err.response)
        })
    }

    render() {
        return (
            <div>
                <h1>Trainer Login</h1>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.trainerInfo.username}
                    onChange={this.handleChange}
                    />
                    <br/>
                    <br/>

                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.trainerInfo.password}
                    onChange={this.handleChange}
                    />
                    <br/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default TrainerLogin

