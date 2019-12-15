import React, { useState, useRef } from 'react';
import './TestForm.scss';
import PropTypes from 'prop-types';

const TestForm = (props) => {
let[firstName, setFirstName] = useState(props.firstName);
let[lastName, setlastName] = useState(props.lastName);
const inputRef = useRef(null);
const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit({firstName, lastName});
    console.log(inputRef.current)
}

    const onFirstNameChange = ({target: {value}}) => setFirstName(value);
    const onLastNameChange = ({target: {value}}) =>setlastName(value);

    

    return (
        <form onSubmit={onSubmit}>
            <input
            ref = {inputRef}
            name="firstName"
            id="first-name"
            onChange = {onFirstNameChange} defaultValue={props.firstName}
            />
            <input 
            name="lastName" 
            id="last-name" 
            onChange ={onLastNameChange} 
            defaultValue={props.lastName}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

TestForm.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    onFirstNameChange: PropTypes.func
};

export default TestForm;