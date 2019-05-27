import styled from "@emotion/styled"

import { colors, fonts, media, padding } from "../utils/styles"

export const TransitionIndicator = styled.div `
  position: absolute;
  bottom: ${({ status }) => (status === "entering" || status === "entered" ? 0 : '-100%')};
  height: 100vh;
  width: 100vw;
  z-index: 18;
  background: ${colors.gray};
  opacity: ${({ status }) => (status === "entering" || status === "entered" ? 0 : 0.3)};
  transform: ${({ status }) => (status === "entering" || status === "entered" ? `translateY(-100%)` : `translateY(100%)`)};
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
`

export const HeaderContainer = styled.header `
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: ${props => props.open ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  z-index: 15;
  background: ${colors.darkest};
  border-bottom: ${props => props.open ? `1px solid ${colors.grayTransparent}` : 0};
  transition: border-bottom 0.15s ease;

  @media ${media.small} {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const MenuDisplay = styled.div `
  display: flex;
  justify-content: space-between;
`

export const Nav = styled.nav `
  display: ${props => props.header ? 'none' : 'flex'};
  flex-direction: column;
  padding: ${props => props.page ? '48px 0 24px' : '0'};

  @media ${media.small} {
    display: ${props => props.menu ? 'none' : 'flex'};
    flex-direction: ${props => props.legal ? 'column' : 'row'};
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

export const FooterContainer = styled.footer `
  width: 100%;
  padding: 88px 0 36px;
  display: flex;
  flex-direction: column;
`

export const FooterSection = styled.section `
  display: flex;
  justify-content: space-between;
`

export const LegalContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BaseSection = styled.section `
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  @media ${media.large} {
    margin: 0 78px;
  }
`

export const HeroSection = styled(BaseSection) `
  height: calc(100vh - 64px);
  padding: 0 0 48px;
  justify-content: flex-end;

  @media ${media.medium} {
    padding-right: ${padding.md};
  }

  @media ${media.large} {
    padding-right: ${padding.xlg};
  }
`

export const SectionLarge = styled(BaseSection) `
  padding: 128px 0;

  @media ${media.medium} {
    padding: ${props => props.right ? `128px ${padding.sm} 128px 0` : `128px 0 128px ${padding.sm}`};
  }

  @media ${media.large} {
    padding: ${props => props.right ? `192px ${padding.lg} 192px 0` : `192px 0 192px ${padding.lg}`};
  }
`

export const SectionSmall = styled(BaseSection) `
  padding: 128px 0 88px;

  @media ${media.medium} {
    padding: 192px ${padding.md} 128px 0;
  }

  @media ${media.large} {
    padding: 192px ${padding.xlg} 128px 0;
  }
`

export const List = styled.ul `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  margin: 48px 0 0;
  list-style: none;

  @media ${media.medium} {
    margin: 64px 0 0;
  }

  @media ${media.large} {
    max-height: 176px;
    max-width: 100%;
  }
`

export const ListItem = styled.li `
  font-weight: 400;
  font-size: ${fonts.metaSm};
  line-height: ${fonts.metaLineHeight};
  color: ${colors.textDark};
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '—';
    margin-right: 8px;
  }

  @media ${media.large} {
    font-size: ${fonts.metaMd};
    margin-bottom : 24px;

    ::before {
      margin-right: 16px;
    }
  }
`