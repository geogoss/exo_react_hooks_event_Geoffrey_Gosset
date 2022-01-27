import React from 'react';

const Exo2 = ({text, setVal}) => {

    let changeText = (e) => {
        if (e.key === "Enter") {
            text = e.target.value
            setVal({text})
        };
    };



  return (
  <div className='cadreExo2'>
      <h2>Exo2</h2>
      <p>{text}</p>
      <input onKeyPress={changeText} type="text" placeholder='insérer du text' />
  </div>
  );
}

export default Exo2;
