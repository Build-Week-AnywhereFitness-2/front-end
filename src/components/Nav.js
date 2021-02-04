import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components";

export const StyledLinks = styled.div`
    font-family: Helvetica, sans-serif;
    .link {
      text-decoration: none;
      color: lightgrey;
      margin: 1rem;
      flex-basis: fit-content;
    }
    .link:hover{
        color: white;
    }
    .ui {
      background-color: #3D434A;
      width: 100%;
    }
    .menu {
      display: flex;
      justify-content: space-evenly;
      padding: 0.5rem 0 0.5rem 0;
    }
    h1 {
      padding: 1rem;
      color: gainsboro;
    }
`;

function Nav() {
    return (
        <StyledLinks>
            <div className="ui menu" >
                <h1>🏋️‍♀️ ANYWHERE FITNESS 🏋️‍♀️</h1>
                <a className="item link">
                    <Link className="link" to="/">Dashboard</Link>
                </a>
                <a className="link item">
                    <Link className="link" to="/trainerpage">Trainers</Link>
                </a>
                <a className="link item">
                    <Link className="link" to="/clientpage">Clients</Link>
                </a>
                <a className="link item">
                    <Link className="link" to="/login">Login</Link>
                </a>
                <a className="link item">
                    <Link className="link" to="/">Logout</Link>
                </a>
            </div>
        </StyledLinks>
    )
}

export default Nav;
