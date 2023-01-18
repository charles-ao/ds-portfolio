import React from "react";

const Footer = () => {
    const getYear = () => {
        const thisYear = new Date().getFullYear();
        return thisYear
    }

    return (
        <div className="footer">
            <p>Data Scientist</p>
            <p>Adedunmola Adeiye &#169; {getYear()}</p>
            <p>Frontend Developer</p>
        </div>
    )
}

export default Footer