import React from "react";
import "./Button.scss";

const Button = (props) => {
    return (
        <button
            className={props.class}
            disabled={props.disabled}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
};
export default Button;
