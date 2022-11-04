import React from 'react';
import Container from '@mui/material/Container';

export default function Footer() {
    return (
      <div className="Footer">
        <Container maxWidth="sm">
        <h6 style={{textAlign: "center", fontSize: "15px"}}>Made by Julia Khalina @ {new Date().getFullYear()}</h6>
        </Container> 
      </div>
    )
    };