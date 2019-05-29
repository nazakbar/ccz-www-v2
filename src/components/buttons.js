import styled from "@emotion/styled"

import { fonts, colors, media } from "../utils/styles"

export const ButtonMenu = styled.button `
  height: 64px;
  display: inline-flex;
  vertical-align: baseline;
  padding: 24px 14px;
  font-size: ${fonts.metaSm};
  font-weight: 600;
  color: ${colors.textLight};

  @media ${media.small} {
    display: none;
  }
`

export const ButtonSubmit = styled.button `
  align-self: flex-end;
  padding: 16px 56px;
  border-radius: 24px;
  font-size: ${fonts.metaSm};
  font-weight: 600;
  color: ${colors.darkest};
  background: ${colors.yellow};

  :disabled {
    background: ${colors.grayTransparent};
  }
`

export const ButtonCopy = styled.button `
  color: ${colors.yellow};
`