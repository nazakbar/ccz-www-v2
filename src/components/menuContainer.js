import React from "react"
import { Transition } from "react-transition-group"

import { MenuItemContainer } from "./container"

export const MenuContainer = ({ open, children, className }) => {
  return (
    <Transition in={open} timeout={{ enter: 250, exit: 250 }}>
      {state => (
        <MenuItemContainer state={state} className={className}>
          {
            open
            ? children
            : null
          }
        </MenuItemContainer>
      )}
    </Transition>
  )
}