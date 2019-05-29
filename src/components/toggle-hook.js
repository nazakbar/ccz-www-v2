import { useState, useEffect } from "react"

export const useToggle = () => {

  const [isToggled, setToggle] = useState('false')

  useEffect(() => {
    setToggle(isToggled)
  })

  const handleClick = () => {
    setToggle(!isToggled)
  }

  return {
    isToggled,
    handleClick
  }
}