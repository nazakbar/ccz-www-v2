import React from "react"

import SEO from "../components/seo"
import { HeroSection, SectionLarge, ListParagraph, ParagraphContainer, ListMeta } from "../components/container"
import { Body, BodyMeta, H1, H2, H3, H4 } from "../components/typography"
import { FullDividers, InsetDividers } from "../components/dividers"
import { ContactSection } from "../components/contactSection"

const PrivacyPolicyPage = () => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <>
      <SEO title="Privacy Policy" />
      <HeroSection>
        <H4>Effective Date: {months[new Date().getMonth()]}{` `}{new Date().getDate()},{` `}{new Date().getFullYear()}</H4>
        <H1>Privacy Policy</H1>
        <Body>This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of the Site.</Body>
      </HeroSection>
      <FullDividers />
      <SectionLarge>
        <Body>If you see an undefined term in this Privacy Policy (such as “Site”), it has the same definition as in our Terms of Use.</Body>
        <Body>When this policy mentions “Concrezan,” “we,” “us,” or “our,” it refers to the Concrezan Studio company that is responsible for your information under this Privacy Policy.</Body>
      </SectionLarge>
      <FullDividers />
      <SectionLarge>
        <H2>Information We Collect</H2>
        <Body>We only ask for personal information when we truly need it to provide our service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</Body>
        <Body>There are three general categories of information we collect.</Body>
        <H3>The information you give to us.</H3>
        <ListParagraph>
          <ListMeta>
            <ParagraphContainer>
              <H3 alt="true">Communication with Concrezan</H3>
              <Body>When you communicate with Concrezan through our Site, we require certain information such as your first name, last name and email address. We also collect information about your communication with us and any information you choose to provide.</Body>
            </ParagraphContainer>
          </ListMeta>
          <ListMeta>
            <ParagraphContainer>
              <H3 alt="true">Other Information</H3>
              <Body>You may otherwise choose to provide us with information when you fill in a form, conduct a search, respond to surveys, or use other features of the Site.</Body>
            </ParagraphContainer>
          </ListMeta>
        </ListParagraph>
        <H3>Information we Automatically Collect from your use of the Site.</H3>
        <ListParagraph>
          <ListMeta>
            <ParagraphContainer>
              <H3 alt="true">Usage Information</H3>
              <Body>We collect information about your interactions with the Site such as the pages or content you view, your searches, and other actions on the Site.</Body>
            </ParagraphContainer>
          </ListMeta>
          <ListMeta>
            <ParagraphContainer>
              <H3 alt="true">Log Data and Device Information</H3>
              <Body>We automatically collect log data and device information when you access and use the Site. That information includes, among other things: details about how you’ve used the Site (including if you clicked on links to third-party links), access dates and times, hardware and software information, cookie data, and pages you’ve viewed or engaged with before or after using the Site.</Body>
            </ParagraphContainer>
          </ListMeta>
          <ListMeta>
            <ParagraphContainer>
              <H3 alt="true">Cookies and Similar Technologies</H3>
              <Body>We use cookies and other similar technologies, such as web beacons, pixels, and mobile identifiers. While you may disable the usage of cookies through your browser settings, the Site currently does not respond to a “Do Not Track” signal in the HTTP header from your browser due to lack of standardization regarding how that signal should be interpreted. For more information on our use of these technologies, see our Cookie Policy.</Body>
            </ParagraphContainer>
          </ListMeta>
        </ListParagraph>
        <H3>Information We Collect from Third-Parties.</H3>
        <Body>Our website may link to external sites that are not operated by us. We do not control or supervise or respond for how third-parties providing your information process your personal data, and any information request regarding the disclosure of your personal information to us should be directed to such third-parties.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>How we use the information we collect</H2>
        <Body>We use, store, and process information, including personal information, about you to provide, understand, improve, and develop the Site, and comply with our legal obligations.</Body>
        <ListParagraph>
          <ListMeta>
            <BodyMeta>Provide, improve, develop the Site</BodyMeta>
          </ListMeta>
          <ListMeta>
            <BodyMeta>Enable you to access and use the Site.</BodyMeta>
          </ListMeta>
          <ListMeta>
            <BodyMeta>Enable you to communicate with Concrezan.</BodyMeta>
          </ListMeta>
          <ListMeta>
            <BodyMeta>Operate, protect, improve, optimize, and personalize the Site and experience, such as by performing analytics and conducting research.</BodyMeta>
          </ListMeta>
          <ListMeta>
            <BodyMeta>Provide customer service.</BodyMeta>
          </ListMeta>
          <ListMeta>
            <BodyMeta>Send you service or support messages, updates, and insights.</BodyMeta>
          </ListMeta>
        </ListParagraph>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Other Important Information</H2>
        <Body>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</Body>
        <Body>We don’t share any personally identifying information publicly or with third-parties, except when required by law.</Body>
        <Body>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of the desired services.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Changes to this privacy policy</H2>
        <Body>Concrezan reserves the right to modify this Privacy Policy at any time in accordance with this provision. If we make changes to this Privacy Policy, we will post the revised Privacy Policy on the Site and update the “Last Updated” date at the top of this Privacy Policy. By your continued access to or use of the Site will be subject to the revised Privacy Policy.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Contact Us</H2>
        <Body>If you have any questions about how we handle user data and personal information, feel free to contact us.</Body>
      </SectionLarge>
      <FullDividers />
      <ContactSection />
    </>
  )
}

export default PrivacyPolicyPage
