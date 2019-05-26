import React, { useState } from "react"

import { NavigationsMobile } from "./navigationsMobile"
import { MenuContainer } from "./menuContainer"
import { MenuExternalLinks, Navigations } from "./linkNavigations"
import { HeaderContainer } from "./container"
import { Copyright } from "./copyright"

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
    <HeaderContainer open={!isToggle}>
      <NavigationsMobile onClick={handleClick}>{`${!isToggle ? 'Close' : 'Menu'}`}</NavigationsMobile>
      <MenuContainer open={!isToggle}>
        <MenuExternalLinks menu="true" links={socialLinks} />
        <Navigations menu="true" links={pageLinks} />
        <Copyright menu="true" />
      </MenuContainer>
      <Navigations links={pageLinks} />
    </HeaderContainer>
  )
}

export default Header