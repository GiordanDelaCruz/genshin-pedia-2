import react from "react";
import { useState } from 'react';
import CharacterCard from '../components/logic/Character/CharacterCard';
import Intro from "../components/logic/Homepage/Intro.jsx"
import Navbar from "../components/logic/Homepage/Navbar.jsx";
import Footer from "../components/logic/Homepage/Footer.jsx";

import characters1, {characters_2} from '../../test-data/character-card.js';

function Home(props){
    return(
        <div>
            <Navbar />
            {/* <!-- Character Display --> */}
            <div className="container">
                <Intro />

                {/* //[Part 1]: Render Character Cards */}
                <div className="row py-2">
                    {characters1.map( (charElem, index) => {
                        return(
                            <div className="col">
                                <CharacterCard
                                    key ={index}
                                    id = {index}
                                    name = {charElem.name}
                                    img = {charElem.img}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="row py-2">
                    {/* //[Part 2]: Render Character Cards */}
                    {characters_2.map( (charElem, index) => {
                    return(
                        <div className="col">
                        <CharacterCard
                            key = {index}
                            id = {index}
                            name = {charElem.name}
                            img = {charElem.img}
                        />
                        </div>
                    );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;