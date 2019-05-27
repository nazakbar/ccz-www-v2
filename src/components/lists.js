import React from "react"
import { List, ListItem } from "./container"

export const Lists = ({ lists }) => (
  <List>
    {lists.map((list, index) => (
      <ListItem key={index}>{list}</ListItem>
    ))}
  </List>
)