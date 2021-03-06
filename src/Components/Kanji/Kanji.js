import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactCardFlip from 'react-card-flip';
import style from './Kanji.module.css';

const Kanji = (props) => {
  const [isFlipped, setFlipped] = useState(false);
  //   console.log(props);

  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!isFlipped);
  };

  const sliceExampleArray = props.examples.slice(0, 2);
  const liHandler = Object.values(sliceExampleArray).map((ex, i) => {
    return (
      <li style={{ fontSize: '0.9rem' }} className={style.Li} key={i}>
        {ex}
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className="d-flex flex-column align-items-center">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div
            style={{
              width: '12rem',
              height: '10rem',
              border: '1px solid black',
              fontSize: '7em',
              maxWidth: '12rem',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="card text-center"
          >
            {props.kanjiRand}
          </div>

          <div
            className="card"
            style={{
              width: '12rem',
              height: '10rem',
              border: '1px solid black',
              fontSize: '5rem',
            }}
          >
            <div className={style.Scroll}>
              <ul>{liHandler}</ul>
            </div>
          </div>
        </ReactCardFlip>
        <div className="m-1">
          <button onClick={handleClick} className="btn btn-success m-3">
            {isFlipped === false ? 'Show example' : 'Back'}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Kanji;
