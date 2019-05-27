import React from "react"

import SEO from "../components/seo"
import { HeroSection, SectionLarge } from "../components/container"
import { Body, H1, H2, H4 } from "../components/typography"
import { Lists } from "../components/lists"
import { FullDividers, InsetDividers } from "../components/dividers"
import { ContactSection } from "../components/contactSection"

const CapabilitiesPage = () => {

  const strategyList = ['Communication', 'Brand Architecture & Portfolio', 'Brand Positioning', 'Digital Transformation', 'Search, Data & Analytics', 'Integrated Campaigns', 'Community Engagement & Loyalty', 'Future Visioning']

  const designList = ['Service Design', 'Experience & Interaction Design', 'Verbal & Visual Identity', 'Design System', 'Content & Messaging', 'Rapid Prototyping']

  const technologyList = ['Web Application', 'Native Application', 'Commerce', 'Voice', 'Internet of Things', 'AR/VR']
  return (
    <>
      <SEO title="Capabilities" />
      <HeroSection>
        <H4>What We Do</H4>
        <H1>Strategy, design, and technology.</H1>
        <Body>Capabilities for the successful delivery of brand experience, service design, and future innovation.</Body>
      </HeroSection>
      <FullDividers />
      <SectionLarge>
        <H2>Strategy</H2>
        <Body>You can build anything you want, but without an appropriate strategy it will be hard to deliver.</Body>
        <Body>Our work begins with us getting to know you, your internal structures, and customers. Together, we head out into the field in search of a shared mission. Observing people’s behaviors and interactions as we help them articulate needs they may not even know exist. We return people to the center of your brand’s story, shifting your focus from a “what can we sell” to a “how can we support them?”</Body>
        <Body>Once we figured out your direction, we draw up a blueprint and we call it strategy. A blueprint that builds trust and delivers meaningful brand and service experiences to people.</Body>
        <Lists lists={strategyList} />
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Design</H2>
        <Body>A story humanely narrated will deliver a powerful emotional message. Design goes beyond physical and digital spaces, it’s the emotional aspect of us humans.</Body>
        <Body>In practice, we engage everyone with a stake in the design from the start. Placing emphasis on your customer journey in relation to your brand and service operations. We co-create the content, user interfaces, and way findings systems. Our work is to design meaningful experiences for the individuals and deliver organizational benefits all at the same time.</Body>
        <Lists lists={designList} />
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Technology</H2>
        <Body>The great thing modern technology does is change how we work and interact with the world. It presents creative ways for your brand to serve and build meaningful relationships with people.</Body>
        <Body>Whether it’s a small app for your internal use, a radical approach to physical spaces, or a platform for millions in your community, we can help you build and personalize your services at scale. Delivering valuable experiences to people today that leads to future innovation.</Body>
        <Lists lists={technologyList} />
      </SectionLarge>
      <FullDividers />
      <ContactSection />
    </>
  )
}

export default CapabilitiesPage
