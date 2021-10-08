import React from "react";
import MediaCard from "./Card";
import Data from "./Data";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';

function App() {
  
  const [cards, setCards] = useState(Data);

  const deleteCards=(id)=>{
        console.log("deleted");

        setCards((oldCards)=>{
            return oldCards.filter((arrElement, index)=>{
                return index !== id;
            });
        });
    };
        const listCard = cards.slice(0,8).map((card, index) =>
            <Col xs={12} lg={3}>
            <MediaCard 
            name={card.name}
            con={card.connections}
            id={index}
            onSelect={deleteCards}
            />
        </Col>
        );

  return (
    <>
              <div>
                <Container>
                  <Row style={{padding: "50px"}} className="g-4">
                {listCard}
                </Row>
                </Container>
          </div>
    </>
  );
}

export default App;
