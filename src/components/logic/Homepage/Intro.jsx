import react from "react";

function Intro(props){
    return(
        <div>
            <div className="row text-center">
                <div className="col">
                    <h1 className="fw-700 mt-5"> 
                    Start Your Journey Today!
                    <img className="compass-icon" src="images/compass-icon.webp" alt=""/> 
                    </h1>
                    <h4 className="fw-600"> Take a look below to help get started!</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3 className="fw-700 mt-5 pb-3">
                    <img className="character-question-icon" src="images/character-question.jpg" alt=""/> 
                    Sample of Characters
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Intro;