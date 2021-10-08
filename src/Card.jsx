import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import imgsrc from './images/icons8-cancel-32.png';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

export default function MediaCard(props) {
    const [buttonText, setButtonText] = useState(true); 


  return (
    <>
    
    <Card style={{ width: '18rem', background: "#c3eaf7" }}>
      <div align="center" className="mt-4">
      <Card.Img variant="top" src="https://picsum.photos/150" style={{borderRadius: "50%", width:"150px", alignItems:"center", border: "solid 2px grey"}} />
    </div>
  <Card.Body>
    <Card.Title className="d-flex justify-content-center">{props.name}</Card.Title>
    <div className="d-flex justify-content-center">
      <div className="bg-warning mb-1 px-5 py-1" align="center" style={{borderRadius:"14px", maxWidth: "200px"}}>
      <p className="pt-1">
      <h5>{props.con}</h5>
      Connections
    </p>
    </div>
      </div>
    <ColorButton ColorButton variant="contained" color="primary"  fullWidth style={{borderRadius: 20}} onClick={() => setButtonText(!buttonText)}>{buttonText ? 'Connect':'Request sent'}</ColorButton>
    <img src={imgsrc} width="32px" alt="bruh" onClick={()=>{props.onSelect(props.id)}} style={{position:"absolute", top:"0px", right:"0px"}}/> 
  </Card.Body>
</Card>
</>
  );
}