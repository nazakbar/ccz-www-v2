import React from "react"

import { Nav } from "./container"
import { PageLink, LegalLink, ExtLinks } from "./links"

export const Navigations = ({ links, className, onClick, menu, header, page }) => (
  <Nav header={header} page={page}>
    {links.map((link, index) => (
      <PageLink
        className={className}
        to={`/${link.toLowerCase()}`}
        key={index}
        onClick={onClick}
        menu={menu}
      >
        {link}
      </PageLink>
    ))}
  </Nav>
)

export const Legal = ({ links, className, onClick, menu, legal }) => (
  <Nav legal={legal} menu={menu}>
    {links.map((link, index) => (
      <LegalLink
        className={className}
        to={link.address}
        key={index}
        onClick={onClick}
      >
        {link.label}
      </LegalLink>
    ))}
  </Nav>
)

export const MenuExternalLinks = ({ links, className, onClick, menu }) => (
  <Nav menu={menu}>
    {links.map((link, index) => (
      <ExtLinks menu={menu}
        className={className}
        href={link.address}
        target="_blank"
        rel="noreferrer noopener"
        key={index}
        onClick={onClick}
      >
        {link.label}
      </ExtLinks>
    ))}
  </Nav>
)