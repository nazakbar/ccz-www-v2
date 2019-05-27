import React from "react"

import { SectionSmall } from "./container"
import { H2 } from "./typography"
import { SectionLink } from "./links"

export const ContactSection = () => {

  const contactLink = ['contact']

  return (
    <SectionSmall>
      <H2>Want to reshape the future together?</H2>
      <SectionLink contact="true" to={`/${contactLink}`}>Let’s Talk.</SectionLink>
    </SectionSmall>
  )
}