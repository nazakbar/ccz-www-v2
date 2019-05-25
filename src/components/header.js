import React, { useState } from "react"

import { NavigationsMobile } from "./navigationsMobile"
import { MenuContainer } from "./menuContainer"
import { MenuExternalLinks, Menu } from "./linkNavigations";

const Header = () => {

  const socialLinks = [{
    label: 'LinkedIn',
    address: '/'
  }, {
    label: 'Twitter',
    address: '/'
  }, {
    label: 'Instagram',
    address: '/'
  }, {
    label: 'Medium',
    address: '/'
  }]

  const pageLinks = ['Capabilities', 'Company', 'Contact']

  const [isToggle, setToggle] = useState('false')

  const handleClick = () => {
    setToggle(!isToggle)
  }

  return (
    <header>
      <NavigationsMobile onClick={handleClick}>{`${!isToggle ? 'Close' : 'Menu'}`}</NavigationsMobile>
      <MenuContainer open={!isToggle}>
        <MenuExternalLinks links={socialLinks} />
        <Menu links={pageLinks} />
        <span>© Concrezan {new Date().getFullYear()}</span>
      </MenuContainer>
    </header>
  )
}

export default Header