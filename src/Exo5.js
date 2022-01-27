import React from 'react';

export const Exo5 = ({alert}) => {
    return (
        <div>
            <h2>Exo5</h2>
            <p>click bouton => alert</p>
            <button onClick={alert} className='btn btn-info p-3 rounded-pill'> click ma race</button>
        </div>
    );
};
