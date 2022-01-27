import React from 'react';

export const Exo4 = () => {
        let change = (e) => {
            e.target.style.backgroundColor = "green"
            e.target.style.color = "white"
        }

        let remet = (e) => {
            e.target.style.backgroundColor = ""
            e.target.style.color = ""
        }



    return (
        <div className='cadreExo4 mt-5'>
            <h2>Exo4</h2>
            <p>Change au focus</p>
            <input onFocus={change} onBlur={remet} type="text"/>
        </div>
    );
};
