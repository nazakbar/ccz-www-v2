import React from "react"

import { MenuContainer } from "./menuContainer"
import { MenuExternalLinks, Navigations } from "./linkNavigations"
import { Copyright } from "./copyright"

const Menu = ({ open, onClick }) => {

  const socialLinks = [
    {
      label: 'LinkedIn',
      address: 'https://www.linkedin.com/company/concrezan'
    }, {
      label: 'Twitter',
      address: 'https://twitter.com/concrezan'
    }, {
      label: 'Instagram',
      address: 'https://www.instagram.com/concrezan'
    }, {
      label: 'Medium',
      address: 'https://medium.com/@concrezan'
    }
  ]

  const pageLinks = ['Capabilities', 'Company', 'Contact']

  return (
      <MenuContainer open={open}>
        <MenuExternalLinks onClick={onClick} menu="true" links={socialLinks} />
        <Navigations onClick={onClick} page="true" menu="true" links={pageLinks} />
        <Copyright onClick={onClick} menu="true" />
      </MenuContainer>
  )
}

export default Menu