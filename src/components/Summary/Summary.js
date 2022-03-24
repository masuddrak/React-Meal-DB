import React from 'react';

const Summary = ({singCard}) => {
    const {strMeal,idMeal}=singCard;
    return (
        <div>
            <li>{strMeal}</li>
        </div>
    );
};

export default Summary;