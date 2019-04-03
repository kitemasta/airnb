import * as React from 'react';
import { RegisterView } from './ui/RefisterView';
import { RegisterController } from '@abb/controller';

export class RegisterConnector extends React.PureComponent {
  render() {
    return  (
        <RegisterController>
          {({ submit }) => <RegisterView submit={submit} />}
        </RegisterController>
    );
  }
}