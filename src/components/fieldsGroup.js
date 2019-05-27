import React from "react"

import { FieldContainer, FieldLabel, Message, Field, InputFieldSet } from "./input"

export const MessageInput = ({ row, className, name, value, placeholder, onFocus, onBlur, onChange, required, label, children }) => (
  <FieldContainer>
    <FieldLabel htmlFor={name}>{label}</FieldLabel>
    <Message 
      row={row}
      className={className}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      required={required}
      onChange={onChange}
    />
    {children}
  </FieldContainer>
)

export const FieldsInput = ({ type, className, name, value, placeholder, onFocus, onBlur, onChange, required, label, children }) => (
  <FieldContainer>
    <FieldLabel htmlFor={name}>{label}</FieldLabel>
    <Field 
      type={type}
      className={className}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      required={required}
      onChange={onChange}
    />
    {children}
  </FieldContainer>
)

export const FieldGroup = ({ children }) => (
  <InputFieldSet>
    {children}
  </InputFieldSet>
)