import React from 'react';
import "./PersonalPage.css"
import NavBar from "../NavBar/NavBar";
import {Container} from "@mui/material";
import PersonalContent from "../PersonalContent/PersonalContent";

const PersonalPage = () => {
    return (
        <div style={{minHeight:"100vh"}}>
            <NavBar/>
            <PersonalContent/>
        </div>
    );
};

export default PersonalPage;