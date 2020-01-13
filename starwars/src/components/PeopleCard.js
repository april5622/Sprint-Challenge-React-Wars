import React, {useState} from "react";
import {Button, Collapse, Card, CardBody, CardSubtitle} from 'reactstrap';
import styled from 'styled-components';

const TitleH3 = styled.h3`
  font-size: 20px;
 `; 


const PeopleCard = ({ person }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <div className="People-list">
        <TitleH3>{person.name}</TitleH3>
        <Button color="warning" onClick={toggle} style={{ marginBottom: " 1rem" }}>
       More Info
        </Button>
        <Collapse isOpen={isOpen}>  
            <Card>
                <CardBody>
                    <CardSubtitle>Birth Year: {person.birth_year}</CardSubtitle>
                    <CardSubtitle>{person.homeworld}</CardSubtitle>
                    <CardSubtitle>{person.films}</CardSubtitle>
            </CardBody>
            </Card>
        </Collapse>
       
    </div>

  
    )}

export default PeopleCard;