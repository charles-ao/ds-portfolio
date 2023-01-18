import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft} from '@fortawesome/fontawesome-free-solid'

/*Requires alot of work*/
const Details = () => {

    return (
        <div className="Details">
            <div className="details-title">
                <div>
                    <div>
                        <FontAwesomeIcon icon={faLongArrowAltLeft}/>
                    </div>
                    <div>
                        Adedunmola
                    </div>
                </div>
                <div>
                    <h2> Carbon Homepage Clone </h2>
                </div>
            </div>
            <div  className="details-body">

            </div>
        </div>
    )
}

export default Details