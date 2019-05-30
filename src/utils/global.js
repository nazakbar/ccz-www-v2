import React from "react"
import { Global, css } from "@emotion/core"
import "typeface-montserrat"

import { fontDefault, fonts, colors, media } from "./styles"

const GlobalStyles = () => (
  <Global 
    styles={css `

      html {
        box-sizing: border-box;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-family: ${fontDefault};
        font-weight: 400;
        font-size: 16px;
        line-height: ${fonts.sizeLineHeight};
      }

      body {
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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

      a,
      button,
      input,
      option,
      optgroup,
      select,
      textarea {
        line-height: 1;
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

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      textarea {
        overflow: auto;
      }

      hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

    `}
  />
)

export default GlobalStyles