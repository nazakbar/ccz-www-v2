import React from "react"

import { SubmissionContainer } from "./container"
import { H2 } from "./typography"

export const Submission = ({ label }) => (
  <SubmissionContainer>
    <H2>{label}</H2>
  </SubmissionContainer>
)