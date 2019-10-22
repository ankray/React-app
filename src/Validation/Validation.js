import React from 'react';

const validation = (props) => {
  let validationMessage = 'Entered text is too short!';

  if (props.inputLength >= 5) {
    validationMessage = 'Entered text is long enough!'
  }
  return (
    <div>
      <p>
        {validationMessage}
      </p>
    </div>
  )
};

export default validation;
