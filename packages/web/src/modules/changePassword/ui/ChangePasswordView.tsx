import * as React from 'react';
import { Form, Icon, Button } from 'antd';
import { NormalizedErrorMap, ForgotPasswordChangeMutationVariables } from '@abb/controller';
import { changePasswordSchema } from '@abb/common';
import { withFormik, FormikProps, Field, Form as FForm } from 'formik';
import { InputField } from '../../shared/InputField';

interface FormValues {
  newPassword: string;
}

interface Props {
  onFinish: () => void;
  token: string;
  submit: (values: ForgotPasswordChangeMutationVariables) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <FForm style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="login-form" style={{ width: 400 }}>
          <Field
            name="newPassword"
            type="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="New Password"
            component={InputField}
          />
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Change Password
            </Button>
          </Form.Item>
        </div>
      </FForm>
    );
  }
}


export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({
    newPassword: ''
  }),
  handleSubmit: async ({ newPassword }, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit({ newPassword, key: props.token})
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
