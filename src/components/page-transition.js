import React from "react"
import { TransitionGroup, Transition } from "react-transition-group"

import { TransitionIndicator } from "./container"

const timeout = 250
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    transitionDelay: `500ms`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

const PageTransition = ({ children, location }) => {

  return (
    <TransitionGroup component={null}>
      <Transition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
        mountOnEnter
        unmountOnExit
      >
        {status => (
          <>
            <main
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </main>
            <TransitionIndicator unmountOnExit status={status} />
          </>
        )}
      </Transition>
    </TransitionGroup>
  )
}

export default PageTransition