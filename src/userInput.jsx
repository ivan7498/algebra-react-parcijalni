import PropTypes from 'prop-types'; 

function UserInput({ onComplete }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formElement = event.target;
        const inputElement = formElement.search;
        let inputValue = inputElement.value.trim().toLowerCase(); // Uklanjamo bijele znakove s početka i kraja i pretvaramo u mala slova

        // Zamijenimo razmake s crticama
        inputValue = inputValue.replace(/\s+/g, '-');

        if (!inputValue) return;
        onComplete(inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input id="search" type="text" placeholder="e.g. reduxjs" />
            <button type="submit">GO!</button>
        </form>
    );
}

UserInput.propTypes = {
    onComplete: PropTypes.func.isRequired,
};

export default UserInput;
