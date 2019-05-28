import React from "react"

import SEO from "../components/seo"
import { HeroSection } from "../components/container"
import { Body, H1, H4 } from "../components/typography"
import { InlineLink } from "../components/links"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <HeroSection>
      <H4>404</H4>
      <H1>We couldn’t find this page.</H1>
      <Body>Maybe it’s out there, or maybe you’re early. Let’s find a better place for you to go. Visit our <InlineLink to="/">homepage.</InlineLink></Body>
    </HeroSection>
  </>
)

export default NotFoundPage
