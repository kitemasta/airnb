import * as React from 'react';
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { loginSchema } from '@abb/common';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { InputField } from '../../shared/InputField';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Card>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>Login</Text>
          <Field
            name="email"
            placeholder="Email"
            component={InputField}
            autoCapitalize="none"
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField}
          />
          <Button style={{ marginTop: 30 }} title="Login" onPress={handleSubmit as any} />
        </Card>
      </View>
    );
  }
}


export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors);
    }
  }
})(C);