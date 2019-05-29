import React from "react"

import { RadioContainer, Radio, RadioLabel, RadioFieldSet, Legend } from "./input"

export const RadioInput = ({ name, value, checked, onChange, label }) => (
  <RadioContainer>
    <Radio 
      type="radio"
      name={name}
      id={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <RadioLabel htmlFor={name}>{label}</RadioLabel>
  </RadioContainer>
)

export const RadioGroup = ({ children, groupLabel }) => (
  <RadioFieldSet>
    <Legend>{groupLabel}</Legend>
    {children}
  </RadioFieldSet>
)