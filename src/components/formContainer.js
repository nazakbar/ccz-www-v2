import React from "react"

import { Container } from "./input"
import { ButtonSubmit } from "./buttons"

export const FormContainer = ({ children, label, onSubmit, disabled }) => (
  <Container onSubmit={onSubmit} noValidate>
    {children}
    <ButtonSubmit type="submit" disabled={disabled}>{label}</ButtonSubmit>
  </Container>
)