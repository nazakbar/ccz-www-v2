import React from "react"

import { HomeLink, LetterIcon, WordIcon } from "./brandmark"
import { MenuDisplay } from "./container"
import { ButtonMenu } from "./buttons"

export const NavigationsMobile = ({ children, onClick }) => (
  <MenuDisplay>
    <HomeLink onClick={onClick}>
      <LetterIcon header="true" />
      <WordIcon />
    </HomeLink>
    <ButtonMenu onClick={onClick}>{children}</ButtonMenu>
  </MenuDisplay>
)