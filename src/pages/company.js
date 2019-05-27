import React from "react"

import SEO from "../components/seo"
import { HeroSection, SectionLarge } from "../components/container"
import { Body, H1, H2, H4 } from "../components/typography"
import { ContactSection } from "../components/contactSection"

const CompanyPage = () => (
  <>
    <SEO title="Company" />
    <HeroSection>
      <H4>Who We Are</H4>
      <H1>Brand experience, service design, and future innovation.</H1>
      <H2>We are Concrezan.</H2>
      <Body>An independent brand experience and service design consultancy.</Body>
    </HeroSection>
    <SectionLarge>
      <H2>Our Purpose</H2>
      <Body>We help redesign organizations into modern service providers and brands to deliver meaningful experiences. We use strategy, design, and technology to deliver value to customers and lead organizations to future innovation.</Body>
      <Body>All that said, we help you thrive in shaping the new normal, take appropriate actions, and make decisive decisions through design. Together, we create a future where the value we provide is no longer derived from the products we build, but from the service that we perform for people.</Body>
    </SectionLarge>
    <SectionLarge>
      <H4>How We Do It</H4>
      <H2>No yea-sayers, only collaborators.</H2>
      <Body>We’re built different. We dream big. We love collaborations.</Body>
      <Body>There are a lot of things that we are really good at, but there’s so much that we don’t know about our client’s business. So, instead of saying yes to everything, we collaborate with them, have many deep conversations, and dream big together.</Body>
      <Body>We are also multi-disciplinary. We get all sorts of specialists involved in our work from researchers to designers to engineers. They create room for us to experiment and refine as we figure out what is right for you.</Body>
    </SectionLarge>
    <SectionLarge>
      <H2>No pitching.</H2>
      <Body>We don’t do pitches. We don’t like wasting time, neither do you. In our perspective, it’s the worse way to start a working relationship.</Body>
      <Body>With us, a new project starts with the proposal. We collaborate with our clients to understand their needs, shape the right team, figure out the appropriate budget, and set the project up for success. Together we create the proposal that makes sense.
</Body>
    </SectionLarge>
    <SectionLarge>
      <H2>No presentations.</H2>
      <Body>We don’t do presentations. Again, we don’t like wasting time, neither should you. We prefer going straight to work, test the viability of ideas, build prototypes and get real-time feedback from our clients. As we focus on quick iterations of our work, clients get a clear view of its progression.</Body>
    </SectionLarge>
    <ContactSection />
  </>
)

export default CompanyPage
