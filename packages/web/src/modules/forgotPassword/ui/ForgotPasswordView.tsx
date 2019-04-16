import * as React from 'react';
import { Form, Icon, Button } from 'antd';
import { withFormik, FormikProps, Field, Form as FForm } from 'formik';
import { InputField } from '../../shared/InputField';
import { NormalizedErrorMap } from '@abb/controller';

interface FormValues {
  email: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <FForm style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="login-form" style={{ width: 400 }}>
          <Field
            name="email"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            component={InputField}
          />
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Reset password
            </Button>
          </Form.Item>
        </div>
      </FForm>
    );
  }
}


export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({
    email: ''
  }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
