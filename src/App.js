import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import { PrivateRoute } from './utils/PrivateRoute';
import TrainerPage from "./components/trainer/Trainerpage"
import "./App.css";
import { useState } from 'react';
import styled from "styled-components";



const StyledLinks = styled.div`
font-family:Helvetica, sans-serif;
  .link {
    text-decoration: none;
    color: lightgrey;
    margin: 1rem; 
    flex-basis: fit-content;
    flex-shrink: 3;
  }
  .App-header {
    background-color: #3D434A;
    min-height: 8vh;
    font-size: calc(10px + 2vmin);
}
  .menu {
    display: flex;
    margin-right: 10%;
    justify-content: flex-start;
  }
  h1 {
    padding: 1rem;
  }
`;

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const logout = () => {
    localStorage.removeItem("token")
    setLoginStatus(false);
  };
  return (
    <div className="App">
      <StyledLinks>
        <header className="App-header">
          <div className="ui  menu" >
          <h1>🏋️‍♀️ ANYWERE FITNESS 🏋️‍♀️</h1>
            <a className="item link">
              <Link className="link" to="/dashboard">Dashboard</Link>
            </a>
            <a className="link item">
              <Link className="link" to="/trainerpage">Trainers</Link>
            </a>
            <a className="link item">
              <Link className="link" to="/client">Clients</Link>
            </a>
            <a className="link item">
              <Link className="link" to="/login">Login</Link>
            </a>
            {// ternary statement renders logout button only while logged in 
              (loginStatus)
                ? <a className="link item"> <Link onClick={logout}>Logout</Link> </a>
                : <></>
            }
          </div>
        </header>
        <Switch>
          <Route exact path="/login" component={"login placeholder"} />

          {/* Private Route instead of route? */}
          <Route exact path="/dashboard" component={"dashboard placeholder"} />
          <PrivateRoute exact path="/trainerpage">
            <TrainerPage />
          </PrivateRoute>
        </Switch>


      </StyledLinks>
    </div>
  );
}

export default App;
