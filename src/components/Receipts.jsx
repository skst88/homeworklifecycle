import React, { useState } from 'react';
import Ingredients from './Ingredients';

const Receipts = ({ setMeal }) => {


    return (
        <>
            <form>
                <input type="radio" name="meal" value="plov" onChange={() => setMeal("plov")} />
                <label for="meal"> Плов </label>

                <input type="radio" name="meal" value="lagman" onChange={() => setMeal("lagman")} />
                <label for="meal"> Лагман </label>

                <input type="radio" name="meal" value="manty" onChange={() => setMeal("manty")} />
                <label for="meal"> Манты </label>
            </form>

        </>
    );
};

export default Receipts;