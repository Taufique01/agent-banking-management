import React from 'react';
const defaultStyles = {
  height:'50px',
  outline:'none',
  border:'1px solid grey',
  borderRadius:'5px'
  }

export  function SubmitBtn({onSubmit,value,styles}) {
  return  <input type="submit" value={value} onClick={onSubmit}  style={{...defaultStyles,...styles}}/>;
}
