import React from 'react';

const charComp = (props) => {
  return (
    <div className="charComponent" onClick={props.click}>
      {props.character}
    </div>
  )
};

export default charComp;