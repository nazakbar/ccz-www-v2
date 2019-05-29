import styled from "@emotion/styled"
import { Link } from "gatsby"

import { fonts, colors, media } from "../utils/styles"

export const PageLink = styled(Link) `
  display: inline-flex;
  align-self: ${props => props.menu ? 'flex-start' : 'flex-end'};
  padding: 12px;
  font-size: ${props => props.menu ? `${fonts.h1Sm}` : `${fonts.metaSm}`};
  font-weight: 600;
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textLight};

  @media ${media.small} {
    padding: 24px 12px;
  }

  @media ${media.medium} {
    padding: 24px 12px 24px 20px;
  }

  @media ${media.large} {
    padding: 40px 24px 24px;
    font-size: ${fonts.metaMd};
  }
`

export const LegalLink = styled(Link) `
  display: inline-flex;
  padding: 12px;
  font-size: ${fonts.metaSm};
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textDark};

  @media ${media.small} {
    padding: 16px 12px
  }

  @media ${media.large} {
    font-size: ${fonts.metaMd};
    padding: 16px 24px;
  }
`

export const ExtLinks = styled.a `
  display: inline-flex;
  align-self: ${props => props.menu ? 'flex-start' : 'flex-end'};
  padding: 12px;
  font-size: ${fonts.metaSm};
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textDark};

  @media ${media.small} {
    padding: 16px 12px
  }

  @media ${media.medium} {
    padding: 16px 12px 16px 16px;
  }

  @media ${media.large} {
    font-size: ${fonts.metaMd};
    padding: 16px 24px;
  }
`

export const SectionLink = styled(Link) `
  align-self: flex-start;
  margin: 40px 0 0;
  font-weight: 600;
  font-size: ${fonts.metaSm};
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textLight};
  color: ${colors.textLight};
  text-decoration: ${props => props.contact ? ` underline ${colors.yellow}` : ` underline ${colors.grayAlpha}`};

  :hover {
    color: ${colors.textLight};
    text-decoration: underline ${colors.yellow};
  }

  @media ${media.large} {
    font-size: ${fonts.metaMd};
  }
`

export const InlineLink = styled(Link) `
  font-size: inherit;
  font-weight: 600;
  color: ${colors.textLight};
  text-decoration: underline ${colors.textLight};

  :hover {
    text-decoration: underline ${colors.yellow};
  }
`