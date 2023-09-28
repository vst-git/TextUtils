import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btntext, setBtntext] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      setBtntext('Enable Light Mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtntext('Enable Dark Mode');
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h5>About Us</h5>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Details
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Here you can modify your text into differnt types.
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={toggleStyle}>
        {btntext}
      </button>
    </div>
  );
}
