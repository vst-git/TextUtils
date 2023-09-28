import React, { useState } from 'react';

export default function TextFrom(props) {
  //Use of states, React hook
  const [text, setText] = useState('Put your text here');

  const handleUpclick = () => {
    console.log('Uppercase is clicked');
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownclick = () => {
    console.log('Lowercase is clicked');
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnchange = (event) => {
    console.log('Text is changed');
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    console.log('Extra spaces are removed');
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleInputEmail1"
            rows="8"
            value={text}
            onChange={handleOnchange}
          ></textarea>
        </div>
        <button
          type="Submit"
          className="btn btn-primary mx-2"
          onClick={handleUpclick}
        >
          Uppercase
        </button>
        <button
          type="Submit"
          className="btn btn-primary"
          onClick={handleDownclick}
        >
          Lowercase
        </button>
        <button
          type="Submit"
          className="btn btn-primary mx-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>

      <div className="container my-4">
        <h3>Text Summary</h3>
        <p>
          Number of words : {text.split(' ').length} <br />
          Number of characters : {text.length}
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
