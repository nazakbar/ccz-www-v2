import { useState, useEffect } from "react"
import { database } from "./firebase"

export const useForm = (callback, initialValues, validate) => {

  const [values, setValues] = useState(initialValues)
  const [selected, setSelection] = useState('business')
  const [result, showResult] = useState('')
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEnabled, setEnabled] = useState(true);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const db = database;
      db.collection("contacts").add({
        type: selected,
        name: values.name,
        email: values.email,
        organization: values.organization,
        message: values.message
      });
      setEnabled(true)
      setSelection('business')
      setValues(initialValues)
      showResult(`Thank you. We'll be in touch.`)
      callback()
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setEnabled(false)
    setIsSubmitting(true);
    setErrors(validate(values))
  }

  const handleChange = (event) => {
    event.persist()
    setEnabled(true)
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }
  
  return {
    isEnabled,
    selected,
    setSelection,
    handleChange,
    handleSubmit,
    result,
    values,
    errors
  }
}