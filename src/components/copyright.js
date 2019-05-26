import React from "react"

import { MetaText } from "./typography"

export const Copyright = ({ menu }) => (
  <MetaText menu={menu}>© Concrezan {new Date().getFullYear()}</MetaText>
)