import React from "react";
import "./Title.scss";

const Title = ({ children, color, textAlign }) => {
    return (
        <div style={{ color, textAlign }}>
            <h1>{children}</h1>
        </div>
    );
};
export default Title;
