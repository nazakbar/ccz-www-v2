import React from "react"

import SEO from "../components/seo"
import { HeroSection, SectionLarge, SectionSmall } from "../components/container"
import { Body, H1, H4 } from "../components/typography"
import { FullDividers } from "../components/dividers"
import { ContactForm } from "../components/contactForm"

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <HeroSection>
      <H4>Contact Us</H4>
      <H1>Let’s work together.</H1>
      <Body>If you want to transform your business or get to know more about what we're doing, you're in the right place.</Body>
    </HeroSection>
    <FullDividers />
    <SectionSmall left="true">
      <Body>Fill in the form, or, if you prefer, send us an email.</Body>
    </SectionSmall>
    <SectionLarge>
      <ContactForm />
    </SectionLarge>
  </>
)

export default ContactPage
