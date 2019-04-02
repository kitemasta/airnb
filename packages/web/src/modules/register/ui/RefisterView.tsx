import * as React from 'react';
import {
  Form, Icon, Input, Button
} from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { validUserSchema } from '@abb/common';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = this.props;

    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="login-form" style={{ width: 400 }}>
          <Form.Item 
            help={touched.email && errors.email || ''}
            validateStatus={touched.email && errors.email ? 'error' : ''}
          >
            <Input
              name="email"
              value={values.email}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            help={touched.password && errors.password || ''}
            validateStatus={touched.password && errors.password ? 'error' : ''}
          >
            <Input
              name="password"
              value={values.password}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">Forgot password</a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Or <a href="">login now!</a>
          </Form.Item>
        </div>
      </form>
    );
  }
}


export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  validateOnChange: false,
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
