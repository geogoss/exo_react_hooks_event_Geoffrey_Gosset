import React from 'react';

function Exo1(props) {
  return (
  <div className='cadreExo1'>
      <h2>Exo1</h2>
      <p>you have clicked <span>{props.nombre}</span> times</p>
      <button onClick={props.augmente} className='btn btn-success p-2 rounded-pill mb-5'> +1</button>
  </div>
  );
}

export default Exo1;
