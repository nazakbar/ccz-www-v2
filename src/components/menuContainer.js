import React from "react"

export const MenuContainer = ({ open, children, className }) => {
  return (
    <div className={className}>
      {
        open
        ? children
        : null
      }
    </div>
  )
}