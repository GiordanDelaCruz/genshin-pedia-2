import react from "react";

function CharacterCard(props){
    return(
        <div>
            <h4>
                <img className="character-icon" src={props.img} alt={`A headshot picture of ${props.name}`}/>
                {props.name}
            </h4>
        </div>
    );
}

export default CharacterCard;