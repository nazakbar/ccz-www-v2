/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Menu from "../components/menu"
import Footer from "../components/footer"
import PageTransition from "../components/page-transition"
import GlobalStyles from "../utils/global"
import { useToggle } from "../components/toggle-hook"

const Layout = ({ children, location }) => {

  const { isToggled, handleClick, resetClick } = useToggle()

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyles />
          <Header open={!isToggled} onClick={handleClick} clearMenu={resetClick} />
          <Menu open={!isToggled} onClick={handleClick} />
          <PageTransition location={location}>
            {children}
          </PageTransition>
          <Footer />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
