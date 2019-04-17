import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

class TextPage extends React.PureComponent<RouteComponentProps> {
  render() {
    const { location: { state } } = this.props;

    return (
      <h2>{(state && state.message) || 'hello'}</h2>
    );
  }
}

export default TextPage;