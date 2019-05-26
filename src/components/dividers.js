import styled from "@emotion/styled"

import { colors } from "../utils/styles"

const Dividers = styled.hr `
  max-width: 100%;
  border: none;
  border-bottom: 1px solid ${colors.grayTransparent};
`

export const FullDividers = styled(Dividers) `
  margin: 24px 30px;

  @media (min-width: 1200px) {
    margin: 24px 56px;
  }
`

// export const InsetDividers = styled(Dividers) `
//   max-width: 100%;
//   margin: ${props => props.right ? `0 30px 0 calc(((100vw - 120px) / 4) + 50px)` : `0 calc(((100vw - 120px) / 4) + 50px) 0 30px`};
//   border: none;
//   border-top: 1px inset rgba(173, 176, 184, 0.3);

//   @media(min-width: 720px) {
//     margin: ${props => props.right ? `0 30px 0 calc((((100vw - 200px) / 8) * 2) + 70px)` : `0 calc((((100vw - 200px) / 8) * 2) + 70px) 0 30px`};
//   }

//   @media (min-width: 1200px) {
//     margin: ${props => props.right ? `0 78px 0 calc((((100vw - 420px) / 12) * 4) + 174px)` : `0 calc((((100vw - 420px) / 12) * 4) + 174px) 0 78px`};
//   }
// `