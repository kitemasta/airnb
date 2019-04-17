import * as React from 'react';
import { Form, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { withFormik, FormikProps, Field, Form as FForm } from 'formik';
import { loginSchema } from '@abb/common';
import { InputField } from '../../shared/InputField';
import { NormalizedErrorMap } from '@abb/controller';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
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
          <Field
            name="password"
            type="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Password"
            component={InputField}
          />
          <Form.Item>
            <Link to="/forgot-password">Forgot password</Link>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            Or <Link to="/register">register</Link>
          </Form.Item>
        </div>
      </FForm>
    );
  }
}


export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values)
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(C);
