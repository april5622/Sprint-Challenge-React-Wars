import React, {useState, useEffect} from "react";
import PeopleCard from "./PeopleCard";
import axios from "axios";
//import styled from 'styled-components';

function PeopleList(){
    
const [people, setPeople]= useState([]);

useEffect(()=> {
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            setPeople(res.data.results);
            //console.log(res.data);
        })
        .catch(err => {
            console.log("The data was not returned", err);
        });
    }, []);

    console.log(people);

    return (
        <div className="People">
            {people.map(person => {
                return <PeopleCard person={person} key={person.created} />
            })}
        </div>
    )
}

export default PeopleList;