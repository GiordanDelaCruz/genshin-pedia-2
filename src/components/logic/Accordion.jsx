import react from "react";
import Table from "./Table"

function Accordion(props){
    return(
        <div>
             <Table 
                skillTalents = {props.skillTalents}
            />
        </div>
       
        // NOTE: USUABLE FOR NOW SINCE TOGGLING ACCORDIAN IS NOT WORKING
        // <div>
        //     <div className="accordion accordion-flush" id='333'>
        //         <div className="accordion-item">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //                     Show Additional Details
        //                 </button>
        //             </h2>
        //             <div id="collapseOne" className="accordion-collapse" data-bs-parent="">        
        //                 <div className="accordion-body">        
        //                     <Table 
        //                         skillTalents = {props.skillTalents}
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>  
        // </div>
    );
}

export default Accordion;