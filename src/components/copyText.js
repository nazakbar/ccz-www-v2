import React, {useState} from "react"
import { ButtonCopy } from "./buttons"

export const Email = ({ children }) => {
  
  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = `${`hello@concrezan.com`}`;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  const [isCopied, setCopied] = useState('false')

  const handleClick = () => {
    copyToClipboard()
    setCopied(!isCopied)
  }
  

  return (
    <ButtonCopy onClick={handleClick}>{children}</ButtonCopy>
  )
}