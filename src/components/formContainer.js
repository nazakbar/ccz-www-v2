import React from "react"

import { Container } from "./input"
import { ButtonSubmit } from "./buttons"

export const FormContainer = ({ children, label, onSubmit }) => (
  <Container onSubmit={onSubmit} noValidate>
    {children}
    <ButtonSubmit type="submit">{label}</ButtonSubmit>
  </Container>
)