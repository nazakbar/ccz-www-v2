import React from "react"

import { HomeLink } from "./brandmark"
import { MenuDisplay } from "./container"
import { ButtonMenu } from "./buttons"

export const NavigationsMobile = ({ children, onClick }) => (
  <MenuDisplay>
    <HomeLink onClick={onClick} />
    <ButtonMenu onClick={onClick}>{children}</ButtonMenu>
  </MenuDisplay>
)