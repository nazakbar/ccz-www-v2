import React from "react"

import SEO from "../components/seo"
import { HeroSection, SectionLarge } from "../components/container"
import { H1, H2, H4 } from "../components/typography"
import { SectionLink } from "../components/links"
import { FullDividers, InsetDividers } from "../components/dividers"
import { ContactSection } from "../components/contactSection"



const IndexPage = () => {
  
  const capabilitiesLink = ['capabilities']
  
  const companyLink = ['company']
  
  return (
    <>
      <SEO title="Home" />
      <HeroSection>
        <H1>We build brands that serve smarter and shapes the future.</H1>
      </HeroSection>
      <FullDividers />
      <SectionLarge right>
        <H4>What We Do</H4>
        <H2>We use strategy, design, and technology to build meaningful experiences for customers and lead you to future innovation.</H2>
        <SectionLink to={`/${capabilitiesLink}`}>Our Capabilities</SectionLink>
      </SectionLarge>
      <InsetDividers left />
      <SectionLarge right>
        <H4>Who We Are</H4>
        <H2>Concrezan is a brand experience and service design consultancy. We’re built different. We dream big for a better future.</H2>
        <SectionLink to={`/${companyLink}`}>Our Company</SectionLink>
      </SectionLarge>
      <FullDividers />
      <ContactSection />
    </>
  )
}

export default IndexPage
