import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback?: ReactNode
  children?: ReactNode
  error: string | null
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>{this.props.error}</h2>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;