import styled from "@emotion/styled"

import { colors } from "../utils/styles"

export const RadioContainer = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const FieldContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding: 24px 0;

  p {
    font-size: 13px;
    color: ${colors.textDark};
  }
`

export const RadioLabel = styled.label `
  color: ${colors.textDark};
`

export const FieldLabel = styled.label `
  align-self: flex-start;
`

export const Radio = styled.input `
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1px solid ${colors.gray};
  appearance: none;
  border-radius: 50%;
  transition: 200ms all ease-in-out;

  :checked {
    background: ${colors.lightest};
    border: none;
  }

  :checked + ${RadioLabel} {
    color: ${colors.textLight};
  }
`

export const Message = styled.textarea `
  border: none;
  margin: 16px 0 0;
  padding: 4px;
  width: 100%;
  height: 128px;
  overflow: auto;
  border-bottom: 1px solid ${colors.grayAlpha};
  color: ${colors.textLight};
  resize: none;

  :focus {
    border-bottom: 1px solid ${colors.gray};
  }
`

export const Field = styled.input `
  margin: 16px 0 0;
  padding: 4px;
  height: 32px;
  border-bottom: 1px solid ${colors.grayAlpha};
  color: ${colors.textLight};

  :focus {
    border-bottom: 1px solid ${colors.gray};
  }
`

export const RadioFieldSet = styled.fieldset `
  border: none;
  margin: 0 0 48px;
  padding: 0;
`

export const InputFieldSet = styled.fieldset `
  border: none;
  margin: 48px 0 128px;
  padding: 0;

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    -webkit-text-fill-color: #F5F8FF;
    transition: background-color 5000s ease-in-out 0s;
  }
`

export const Legend = styled.legend `
  padding: 0;
  margin: 0 0 24px;
`

export const Container = styled.form `
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0;
  margin: 0 0 88px;
`