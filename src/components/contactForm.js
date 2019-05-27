import React from "react"

import { FormContainer } from "./formContainer"
import { RadioGroup, RadioInput } from "./radioGroup"
import { FieldGroup, MessageInput, FieldsInput } from "./fieldsGroup"
import { useForm } from "./form-hook"
import validate from "./validationRules"
import { Submission } from "./submission"

export const ContactForm = () => {

  const initialValues = {
    message: '',
    name: '',
    email: '',
    organization: '',
  }

  const { selected, setSelection, errors, values, handleChange, handleSubmit, result } = useForm(login, initialValues, validate)

  function login() {
    console.log(values);
  }

  return (
    <FormContainer label="Send" onSubmit={handleSubmit} result={result}>
      {
        result 
        ? <Submission label={result} /> 
        : null
      }
      <RadioGroup groupLabel="Are you contacting us for">
        <RadioInput 
          name="business"
          value="business"
          checked={selected === "business"}
          onChange={e => setSelection(e.target.value)}
          label="New business"
        />
        <RadioInput 
          name="inquiries"
          value="inquiries"
          checked={selected === "inquiries"}
          onChange={e => setSelection(e.target.value)}
          label="Inquiries"
        />
        <RadioInput 
          name="careers"
          value="careers"
          checked={selected === "careers"}
          onChange={e => setSelection(e.target.value)}
          label="Careers"
        />
      </RadioGroup>
      <FieldGroup>
        <MessageInput 
          className={`input ${errors.message && 'is-danger'}`}
          name="message"
          value={values.message}
          onChange={handleChange}
          label="Your message"
        >
          {errors.message && (
            <p className="help is-danger">{errors.message}</p>
          )}
        </MessageInput>
        <FieldsInput 
          type="text"
          className={`input ${errors.name && 'is-danger'}`}
          name="name"
          value={values.name}
          onChange={handleChange}
          label="Your name"
        >
          {errors.name && (
            <p className="help is-danger">{errors.name}</p>
          )}
        </FieldsInput>
        <FieldsInput 
          type="email"
          className={`input ${errors.email && 'is-danger'}`}
          name="email"
          value={values.email}
          onChange={handleChange}
          label="Your email"
        >
          {errors.email && (
            <p className="help is-danger">{errors.email}</p>
          )}
        </FieldsInput>
        <FieldsInput 
          type="text"
          name="organization"
          value={values.organization}
          onChange={handleChange}
          label="Your company/organization"
        />
      </FieldGroup>
    </FormContainer>
  )
}