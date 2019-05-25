import React from "react"
import { Link } from "gatsby"

export const Menu = ({ links, className, onClick }) => (
  <nav>
    {links.map((link, index) => (
      <Link
        className={className}
        to={`/${link.toLowerCase()}`}
        key={index}
        onClick={onClick}
      >
        {link}
      </Link>
    ))}
  </nav>
)

export const Navigations = ({ links, className, onClick }) => (
  <nav>
    {links.map((link, index) => (
      <Link
        className={className}
        to={`/${link.toLowerCase()}`}
        key={index}
        onClick={onClick}
      >
        {link}
      </Link>
    ))}
  </nav>
)

export const Legal = ({ links, className, onClick }) => (
  <nav>
    {links.map((link, index) => (
      <Link
        className={className}
        to={link.address}
        key={index}
        onClick={onClick}
      >
        {link.label}
      </Link>
    ))}
  </nav>
)

export const MenuExternalLinks = ({ links, className, onClick }) => (
  <nav>
    {links.map((link, index) => (
      <a
        className={className}
        href={link.address}
        target="_blank"
        rel="noreferrer noopener"
        key={index}
        onClick={onClick}
      >
        {link.label}
      </a>
    ))}
  </nav>
)