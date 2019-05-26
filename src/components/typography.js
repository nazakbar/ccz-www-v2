import styled from "@emotion/styled"

import { colors, fonts, media } from "../utils/styles"

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