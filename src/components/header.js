import React from "react"

import { HomeLink, LetterIcon, WordIcon } from "./brandmark"
import { HeaderContainer } from "./container";
import { Navigations } from "./linkNavigations"
import { ButtonMenu } from "./buttons"

const Header = ({ open, onClick, clearMenu }) => {

  const pageLinks = ['Capabilities', 'Company', 'Contact']

  return (
    <HeaderContainer open={open} >
      <HomeLink header="true" onClick={clearMenu}>
        <LetterIcon header="true" />
        <WordIcon />
      </HomeLink>
      <ButtonMenu onClick={onClick}>{`${open ? 'Close' : 'Menu'}`}</ButtonMenu>
      <Navigations header="true" links={pageLinks} />
    </HeaderContainer>
  )
}

export default Header