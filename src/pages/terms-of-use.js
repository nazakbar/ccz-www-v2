import React from "react"

import SEO from "../components/seo"
import { HeroSection, SectionLarge } from "../components/container"
import { Body, H1, H2, H4 } from "../components/typography"
import { FullDividers, InsetDividers } from "../components/dividers"
import { InlineLink } from "../components/links"
import { ContactSection } from "../components/contactSection"

const TermsOfUsePage = () => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <>
      <SEO title="Terms Of Use" />
      <HeroSection>
        <H4>Effective Date: {months[new Date().getMonth()]}{` `}{new Date().getDate()},{` `}{new Date().getFullYear()}</H4>
        <H1>Terms of Use</H1>
        <Body>Please read these Terms of Use carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using the Site, you agree to comply with and be bound by these Terms of Service.</Body>
      </HeroSection>
      <FullDividers />
      <SectionLarge>
        <Body>These Terms of Service (“Terms”) constitute a legally binding agreement (“Agreement”) between you and Concrezan (as defined below) governing your access to and use of the Concrezan website, including any subdomain thereof, and any other websites through which Concrezan makes its services available (collectively, “Site”).</Body>
        <Body>When these Terms mention “Concrezan,” “we,” “us,” or “our,” it refers to Concrezan Studio company you are contracting with.</Body>
        <Body>Our collection and use of personal information in connection with your access to and use of the Site is described in our <InlineLink to="/privacy-policy">Privacy Policy</InlineLink>.</Body>
      </SectionLarge>
      <FullDividers />
      <SectionLarge>
        <H2>The scope of the Site</H2>
        <Body>The Site is used to display and provide information on services by Concrezan to customers and users. The Site is also used for customers to communicate and engage with Concrezan.</Body>
        <Body>Due to the nature of the Internet, Concrezan cannot guarantee continuous and uninterrupted availability and accessibility to the Site. Concrezan may restrict the availability of the Site and certain areas or feature thereof if this is necessary in the matters of capacity limits, the security or integrity of our servers, or to carry out maintenance measures that ensure the proper or improved functioning of the Site. Concrezan may improve, enhance and modify the Site from time to time.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Content</H2>
        <Body>The site and its content may in its entirety or in part to be protected by copyright, trademark, and/or other laws of Malaysia and other countries. You acknowledge and agree that the Site and its content, including all associated intellectual property rights, are the exclusive property of Concrezan and/or its licensors or authorizing third-parties. You will not remove, alter or obscure any copyright, trademark, service mark, or other proprietary rights notices incorporated in or accompanying the Site, and it's content. You will not copy, modify, prepare derivative works, distribute, license, sell and/or transfer the materials and content of the Site. Subject to your compliance with these Terms, Concrezan grants you a limited, non-exclusive, revocable, non-transferable license to access, use and view content made available on or through the Site and accessible to you, solely for your personal and non-commercial use.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Disclaimers</H2>
        <Body>If you choose to use the Site or its content, you do so voluntarily and at your sole risk. The Site or content is provided “as is,” without warranty of any kind, either expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Concrezan does not warrant or make any representation concerning the accuracy, likely results, or reliability of the use of the materials on the Site or otherwise relating to such materials or on any sites linked to this Site.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Links</H2>
        <Body>The Site may contain links to third-party websites or resources (“Third-Party Services”). Such Third-Party Services may be subjected to different terms and conditions and privacy practices. Concrezan is not responsible for the availability or accuracy of such Third-Party Services, or the content, products, or services available from such Third-Party Services. Links to such Third-Party Services are not an endorsement by Concrezan of such Third-Party Services.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Limitations</H2>
        <Body>In no events shall Concrezan or its supplier be liable for any damages (including, without limitation, damages for loss of data, revenue and profit, or due to business interruption) arising out of the use or inability to use the materials on the Site, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damage, these limitations may not apply to you.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Modification of these Terms</H2>
        <Body>Concrezan reserves the rights to modify these Terms at any time in accordance with this provision. If we make changes to these Terms, we will post the revised Terms on the Site and update the “Last Updated” date at the top of these Terms. By your continued access to or use of the Site will constitute acceptance of the revised Terms.</Body>
      </SectionLarge>
      <InsetDividers />
      <SectionLarge>
        <H2>Governing Law</H2>
        <Body>These Terms are governed by and construed in accordance with the laws of Malaysia and you irrevocably submit to the exclusive jurisdiction of the court in that State or location.</Body>
      </SectionLarge>
      <FullDividers />
      <ContactSection />
    </>
  )
}

export default TermsOfUsePage
