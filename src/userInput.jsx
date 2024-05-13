import React from 'react'; // 
import PropTypes from 'prop-types'; 

function UserInput({ onComplete }) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const formElement = event.target;
            const inputElement = formElement.search;
            const inputValue = inputElement.value;
            if (!inputValue) return;
            onComplete(inputValue);
            console.log({ formElement, inputElement });
        }}>
            <input id="search" type="text" placeholder="e.g. reduxjs" />
            <button type="submit">GO!</button>
        </form>
    );
}

UserInput.propTypes = {
    onComplete: PropTypes.func.isRequired,
};

export default UserInput;
