import React, { PropsWithChildren } from "react";

type Props = {
  fallback: React.ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<PropsWithChildren<Props>, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    if (error) {
      return { hasError: true }
    }

    return { hasError: false }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
