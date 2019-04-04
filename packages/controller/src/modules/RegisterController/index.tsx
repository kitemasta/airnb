import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';

interface Props {
  children: (data: { submit: (values: any) => Promise<null> }) => React.ReactNode | null;
}

class C extends React.PureComponent<ChildMutateProps<Props, any, any>> {
  submit = async (values: any) => {
    console.log(values);
    const result = await this.props.mutate({
      variables: values
    })
    console.log(result);
    return null;
  }

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email:$email, password:$password) {
      path
      message
    }
  }
`;

export const RegisterController = graphql(registerMutation)(C);