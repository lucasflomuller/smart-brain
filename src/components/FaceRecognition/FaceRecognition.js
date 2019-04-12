import React from 'react';
import './FaceRecognition.css';

const boxStyle = ({topRow, rightCol, bottomRow, leftCol}) => {
  return {
    top: topRow,
    right: rightCol,
    bottom: bottomRow,
    left: leftCol
  };
}

const FaceRecognition = ({ imageUrl, boxes }) => {
  const boxesJSX = boxes.map(box => (
    <div
      key={`box${box.topRow}${box.rightCol}`}
      className='bounding-box'
      style={boxStyle(box)}>
    </div>
  ));
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {boxesJSX}
      </div>
    </div>
  );
}

export default FaceRecognition;