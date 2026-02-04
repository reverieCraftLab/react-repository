import styled from "./Button.module.css";

const PropTypes = window.PropTypes;

function Button({text}) {
    return <button className={styled.title}>{text}</button>;
}

Button.prototype = {
    test : PropTypes.string.isRequired
}

export default Button;