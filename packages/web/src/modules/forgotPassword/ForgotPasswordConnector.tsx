import * as React from 'react';
import { ForgotPasswordView } from './ui/ForgotPasswordView';

export class ForgotPasswordConnector extends React.PureComponent {

  submit = async (values: any) => {
    console.log(values)
    return null
  }
  
  render() {
    return  (
      <ForgotPasswordView submit={this.submit} />
    );
  }
}