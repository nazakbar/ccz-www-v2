import React from "react"

import { FooterContainer, FooterSection, LegalContainer } from "./container"
import { HomeLink, LetterIcon } from "./brandmark"
import { Navigations, Legal, MenuExternalLinks } from "./linkNavigations"
import { FullDividers } from "./dividers"
import { Copyright } from "./copyright"

const Footer = () => {

  const pageLinks = ['Capabilities', 'Company', 'Contact']

  const legalLinks = [
    {
      label: `Terms of Use`,
      address: `/terms-of-use`
    }, {
      label: `Privacy Policy`,
      address: `/privacy-policy`
    }
  ]

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

  return (
    <FooterContainer>
      <FooterSection>
        <HomeLink footer="true">
          <LetterIcon />
        </HomeLink>
        <Navigations links={pageLinks} />
      </FooterSection>
      <FullDividers />
      <FooterSection>
        <LegalContainer>
          <Legal legal="true" links={legalLinks} />
          <Copyright />
        </LegalContainer>
        <MenuExternalLinks links={socialLinks} />
      </FooterSection>
    </FooterContainer>
  )
}

export default Footer