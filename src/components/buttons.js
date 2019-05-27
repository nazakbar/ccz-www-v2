import styled from "@emotion/styled"

import { fonts, colors, media } from "../utils/styles"

export const ButtonMenu = styled.button `
  height: 64px;
  display: inline-flex;
  align-items: center;
  padding: 0 30px;
  font-size: ${fonts.metaSm};
  font-weight: 600;
  color: ${colors.textLight};

  @media ${media.small} {
    display: none;
  }
`