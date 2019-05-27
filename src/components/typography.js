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

export const MetaText = styled.span `
  padding: 12px 12px 12px 30px;
  display: inline-flex;
  align-self: ${props => props.menu ? 'stretch' : 'flex-end'};
  font-size: ${fonts.metaSm};
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textDark};

  @media ${media.small} {
    padding: 16px 12px 12px 32px;
  }

  @media ${media.large} {
    margin-left: 24px;
    font-size: ${fonts.metaMd};
  }
`