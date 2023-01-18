import React from "react";
import adedunmola from "../../assets/adedunmola.png"


const Herohead = () => {

    return (
        <div className="herohead" id="herohead">
            <div className="herohead-content">
                <div  className="herohead-content-center">
                    <div   className="herohead-content-center-rec">
                        <img src={adedunmola} alt="adedunmola adeiye charles"/>
                    </div>
                    <h2>Data Science.</h2>
                    <h2>Frontend Web Development.</h2>
                </div>
            </div>
        </div>
    )
}

export default Herohead