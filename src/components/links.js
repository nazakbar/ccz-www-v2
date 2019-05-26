import styled from "@emotion/styled"
import { Link } from "gatsby"

import { fonts, colors, media } from "../utils/styles"

export const PageLink = styled(Link) `
  align-self: ${props => props.menu ? 'flex-start' : 'flex-end'};
  padding: ${props => props.menu ? '12px 12px 12px 30px' : '12px 30px 12px 12px'};
  font-size: ${props => props.menu ? `${fonts.h1Sm}` : `${fonts.metaSm}`};
  font-weight: 600;
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textLight};

  @media ${media.small} {
    align-self: stretch;
    padding: 24px 16px;

    &:last-child {
      margin-right: 14px;
    }
  }

  @media ${media.large} {
    padding: 36px 24px 28px;
    font-size: ${fonts.metaMd};

    &:last-child {
      margin-right: 32px;
    }
  }
`

export const LegalLink = styled(Link) `
  padding: 12px 12px 12px 30px;
  font-size: ${fonts.metaSm};
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textDark};

  @media ${media.small} {
    padding: 16px 12px 16px 30px;
  }

  @media ${media.large} {
    margin-left: 24px;
    font-size: ${fonts.metaMd};
  }
`

export const ExtLinks = styled.a `
  align-self: ${props => props.menu ? 'flex-start' : 'flex-end'};
  padding: ${props => props.menu ? '12px 12px 12px 30px' : '12px 30px 12px 12px'};
  font-size: ${fonts.metaSm};
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textDark};

  @media ${media.small} {
    padding: 24px 16px 12px;

    &:last-child {
      margin-right: 14px;
    }
  }

  @media ${media.large} {
    font-size: ${fonts.metaMd};

    &:last-child {
      margin-right: 40px;
    }
  }
`