import React from "react"

import { HomeLink } from "./brandmark"

export const NavigationsMobile = ({ children, onClick }) => (
  <div>
    <HomeLink onClick={onClick} />
    <button onClick={onClick}>{children}</button>
  </div>
)