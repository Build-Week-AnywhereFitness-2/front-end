import styled from "styled-components";
import React, { useState } from 'react'
import img1 from '../media/img1.jpeg'
import img2 from '../media/img2.jpeg'
import img3 from '../media/img3.jpeg'
import img4 from '../media/img4.jpeg'
import img5 from '../media/img5.jpg'
import img6 from '../media/img6.jpg'
import img7 from '../media/img7.jpg'

const DashContainer = styled.div`
font-family:Ubuntu, sans-serif;
display: flex;
`
const DashObj = styled.div `
img{
    max-width: 33%;
    height: auto;
}

`
function Dashboard () {

    return(
    
     <DashContainer>
        <DashObj>
        <div src= {img1}></div>
        <div src= {img2}></div>
        <div src= {img3}></div>
        <div src= {img4}></div>
        <div src= {img5}></div>
        <div src= {img6}></div>
        <div src= {img7}></div>
        </DashObj>
    </DashContainer>
    )


}


export default Dashboard