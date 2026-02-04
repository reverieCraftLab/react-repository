import styled from "./Button.module.css";

const PropTypes = window.PropTypes;

function Button({text, onClick}) {
    return (
        <button
            className={styled.title}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

Button.prototype = {
    test : PropTypes.string.isRequired
}

export default Button;