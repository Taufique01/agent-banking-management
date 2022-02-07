import React from 'react';
const defaultStyles = {
    height:'50px',
    outline:'none',
    border:'1px solid grey',
    borderRadius:'5px'
    }

export  function Input({name,placeholder,onChangeHandle,styles}) {
  return  <input name={name} placeholder={placeholder} onChange={onChangeHandle} style={{...defaultStyles,...styles, }} autoFocus={false}/>;
}
