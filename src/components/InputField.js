import React from 'react';

export default function InputField({
  type,
  name,
  placeholder,
  value,
  onChange
}) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className='form-control'
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
