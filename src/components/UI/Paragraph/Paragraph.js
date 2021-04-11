import React from "react";
import "./Paragraph.scss";

const Paragraph = ({ children, color, fontSize, className }) => {
    return (
        <div className={className} style={{ color, fontSize }}>
            <p>{children}</p>
        </div>
    );
};
export default Paragraph;
