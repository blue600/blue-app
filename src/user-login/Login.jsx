import { Typography } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import axiosPublic from '../config/axios.js';
import { useState, useContext } from 'react';
import AuthContext from './AuthProvider.js';

export const Login = () => {
  const [success, setSuccess] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);

  // ------- functions
  const postLogin = async values => {
    console.log('Success:', values.username, values.password);

    try {
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: {
          user: values.username,
          pwd: values.password,
        },
        url: '/login',
      };
      const res = await axiosPublic(options);

      console.log(res.data.accessToken);
      const username = values.username;
      const accessToken = res.data.accessToken;
      await setAuth({ username, accessToken });
      console.log('auth...', auth);
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  // -------- JSX
  return (
    <>
      {success ? (
        <h1>登录成功了。。。</h1>
      ) : (
        <>
          <Form
            name='login'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={postLogin}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Username'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='remember'
              valuePropName='checked'
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type='primary' htmlType='submit'>
                登录
              </Button>
            </Form.Item>
          </Form>
          <Typography>
            assets by status 6.38 MiB [cached] 2 assets assets by path . 2.23
            KiB asset index.html 1.78 KiB [emitted] asset asset-manifest.json
            458 bytes [emitted] cached modules 10.3 MiB (javascript) 32.6 KiB
            (runtime) [cached] 3353 modules ./src/main-page/MainLayout.js 5.38
            KiB [built] webpack 5.70.0 compiled successfully in 199 ms Compiled
            successfully! You can now view blue-app in the browser. Local:
            http://localhost:3000 On Your Network: http://192.168.31.120:3000
          </Typography>
        </>
      )}
    </>
  );
};
