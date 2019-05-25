import React from "react"
import { Global, css } from "@emotion/core"
import "typeface-montserrat"

import { fontDefault, fonts, colors, media } from "./styles"

const GlobalStyles = () => (
  <Global 
    styles={css `

      html {
        box-sizing: border-box;
      }

      html,
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: ${fontDefault};
        font-weight: 400;
        font-size: ${fonts.sizeSm};
        line-height: 1.533;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        color: ${colors.text};
        background-color: ${colors.darkest};

        @media ${media.large} {
          font-size: ${fonts.sizeMd};
        }
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      a {
        text-decoration: none;
        background-color: transparent;
      }

      button,
      input,
      option,
      optgroup,
      select,
      textarea {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        font: inherit;
      }

    `}
  />
)

export default GlobalStyles