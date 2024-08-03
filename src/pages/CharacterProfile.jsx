import react from "react";
import axios from "axios";

// React Components
import Navbar from "../components/logic/Homepage/Navbar";
import CharacterNavbar from "../components/logic/Character/CharacterNavbar";
import Footer from "../components/logic/Homepage/Footer";
// import CharacterContent from "../components/logic/Character/CharacterContent";
import CharacterSideBar from "../components/logic/Character/CharacterSideBar";
import ganyu_data from "../../test-data/character-info";

// TEMP COMPONENTS
import CharacterIntro from "../components/logic/Character/CharacterIntro";
import CharacterSkills from "../components/logic/Character/CharacterSkills";
import Accordion from "../components/logic/Accordion";

function CharacterProfile(props){

    const imageName = ganyu_data.name.toLowerCase();
    const vision = ganyu_data.vision.toLowerCase();
    return(
        <div>
            {/* Navbar */}
            <CharacterNavbar />

            {/* Main Content */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <CharacterIntro 
                            icon = {imageName}
                            name = {props.name}
                            weapon = {props.weapon}
                            vision = {vision}
                            title = {props.title}
                            description = {props.description}
                        />
                        {/* Lood Skill Talants */}
                        <CharacterSkills
                            name = {imageName}
                            skillTalents = {props.skillTalents}
                            passiveTalents = {props.passiveTalents}
                            constellations ={props.constellations}
                        />
                    </div>
                    <div className="col-lg-3">
                        <CharacterSideBar 
                            rarity = {props.rarity}
                            imageName = {imageName}
                            gender = {props.gender}
                            nation = {props.nation}
                            affiliation = {props.affiliation}
                            constellation = {props.constellation}
                            birthday = {props.birthday}
                            release = {props.release}
                        />
                    </div>
                </div>
                
            </div>
           
            {/* Footer */}
            <Footer />
        </div>
        
    )
}

export default CharacterProfile;