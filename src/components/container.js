import styled from "@emotion/styled"

import { colors, media } from "../utils/styles"

export const HeaderContainer = styled.header `
  display: flex;
  flex-direction: column;
  width: 100%;
  position: ${props => props.open ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  z-index: 15;
  background: ${colors.darkest};
  border-bottom: ${props => props.open ? `1px solid ${colors.grayTransparent}` : 0};
  transition: border-bottom 0.15s ease;

  @media ${media.medium} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const MenuDisplay = styled.div `
  display: flex;
  justify-content: space-between;
`

export const Nav = styled.nav `
  display: ${props => props.menu ? 'flex' : 'none'};
  flex-direction: column;
  padding: ${props => props.menu ? '48px 0 24px' : '0'};

  @media ${media.small} {
    display: ${props => props.menu ? 'none' : 'flex'};
    flex-direction: ${props => props.menu ? 'column' : 'row'};
  }
`

export const MenuItemContainer = styled.div `
  height: ${({ state }) => (state === "entering" || state === "entered" ? `calc(100vh - 64px)` : 0)};
  padding-bottom: ${({ state }) => (state === "entering" || state === "entered" ? '48px' : 0)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${colors.darkest};
  opacity: ${({ state }) => (state === "entering" || state === "entered" ? 1 : 0)};
  transition: opacity 0.7s ease 0.5s, height 0.5s ease;
`