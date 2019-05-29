import styled from "@emotion/styled"

import { colors, fonts, media } from "../utils/styles"

export const H1 = styled.h1 `
  margin: 0 0 48px;
  font-weight: 600;
  font-size: ${fonts.h1Sm};
  line-height: ${fonts.h1LineHeight};
  color: ${colors.textLight};

  @media ${media.small} {
    font-size: ${fonts.h1Md};
  }

  @media ${media.large} {
    font-size: ${fonts.h1Lg};
  }
`

export const H2 = styled.h2 `
  margin: 0 0 24px;
  font-weight: 600;
  font-size: ${fonts.h2Sm};
  line-height: ${fonts.h2LineHeight};
  colors: ${colors.textLight};

  @media ${media.small} {
    font-size: ${fonts.h2Md};
  }

  @media ${media.large} {
    font-size: ${fonts.h2Lg};
  }
`

export const H3 = styled.h3 `
  font-weight: 600;
  font-size: ${fonts.h3Sm};
  line-height: ${fonts.h3LineHeight};
  margin: ${props => props.alt ? `0 0 16px` : `48px 0 24px`};
  color: ${props => props.alt ? `${colors.textDark}` : `${colors.textLight}`};
`

export const H4 = styled.h4 `
  margin: 0 0 24px;
  font-weight: 400;
  font-size: ${fonts.h4Sm};
  line-height: ${fonts.h4LineHeight};
  colors: ${colors.textDark};

  @media ${media.large} {
    font-size: ${fonts.h4Md};
  }
`

export const Body = styled.p `
  margin: 0 0 16px;
  color: ${colors.text};

  @media ${media.large} {
    font-size: ${fonts.sizeMd};
  }
`

export const BodyMeta = styled.p `
  margin: 0 0 16px;
  font-size: ${fonts.metaSm};
  colors: ${colors.textDark};

  @media ${media.large} {
    font-size: ${fonts.metaMd};
  }
`

export const MetaText = styled.span `
  padding: 12px;
  margin: 0 2px;
  display: inline-flex;
  align-self: ${props => props.menu ? 'stretch' : 'flex-end'};
  font-size: ${fonts.metaSm};
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textDark};

  @media ${media.small} {
    padding: 16px 12px;
  }

  @media ${media.large} {
    margin: 0;
    padding: 16px 24px;
    font-size: ${fonts.metaMd};
  }
`