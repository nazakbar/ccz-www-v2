import React from "react"

import SEO from "../components/seo"
import { HeroSection, SectionSmall } from "../components/container"
import { Body, H1, H4 } from "../components/typography"

const ContactPage = () => (
  <>
    <HeroSection>
      <H4>Contact Us</H4>
      <H1>Let’s work together.</H1>
      <Body>If you want to transform your business or get to know more about what we're doing, you're in the right place.</Body>
    </HeroSection>
    <SectionSmall>
      <Body>Fill in the form, or, if you prefer, send us an email.</Body>
    </SectionSmall>
  </>
)

export default ContactPage
