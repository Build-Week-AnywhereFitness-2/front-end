import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import { PrivateRoute } from './utils/PrivateRoute';
import TrainerPage from "./components/trainer/Trainerpage"
import "./App.css";
import { useState } from 'react';
import styled from "styled-components";
import ClientPage from './components/client/Clientpage';
import Signup from "./components/Signup"
import UpdateClass from "./components/trainer/UpdateClass"


 export const StyledLinks = styled.div`
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
          <h1>🏋️‍♀️ ANYWHERE FITNESS 🏋️‍♀️</h1>
            <a className="item link">
              <Link className="link" to="/dashboard">Dashboard</Link>
            </a>
            <a className="link item">
              <Link className="link" to="/trainerpage">Trainers</Link>
            </a>
            <a className="link item">
              <Link className="link" to="/clientpage">Clients</Link>
            </a>
            <a className="link item">
              <Link className="link" to="/signup">Signup</Link>
            </a>
            <a className="link item">
              <Link className="link" to="/dashboard">Login</Link>
            </a>
            {// ternary statement renders logout button only while logged in 
              (loginStatus)
                ? <a className="link item"> <Link onClick={logout}>Logout</Link> </a>
                : <></>
            }
          </div>
        </header>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/updateclass" component={UpdateClass} />

          {/* Private Route instead of route? */}
          <PrivateRoute exact path="/dashboard">
            {/* <Dashboard/> */}
            </PrivateRoute>
          <Route exact path="/trainerpage">
            <TrainerPage />
          </Route>
          <PrivateRoute exact path="/clientpage">
            <ClientPage />
          </PrivateRoute>
        </Switch>


      </StyledLinks>
    </div>
  );
}

export default App;
