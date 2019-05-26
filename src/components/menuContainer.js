import React from "react"
import {
  Transition as ReactTransition,
} from "react-transition-group"

import { MenuItemContainer } from "./container"

export const MenuContainer = ({ children, open, className }) =>  {

  return (
    <ReactTransition in={open} timeout={{ enter: 250, exit: 250 }}>
      {(state) => (
        <MenuItemContainer state={state} className={className}>
          {
            open
            ? children
            : null
          }
        </MenuItemContainer>
      )}
    </ReactTransition>
  )
}