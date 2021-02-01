import React from 'react';

export default function InputField({
  type,
  name,
  placeholder,
  value,
  onChange,
  class_name
}) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className={class_name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
