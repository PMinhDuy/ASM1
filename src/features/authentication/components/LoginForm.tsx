import { useLoginMutation, type LoginMutationVariables } from '#/generated/schemas';
import { PATH_URL } from '#/shared/ultils/constant';
import { Button, Form, Input, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Text } = Typography;

function LoginForm() {
  const navigate = useNavigate();
  const [loginMutation, { loading }] = useLoginMutation({
    onCompleted: (data) => {
      if (data.login.access_token) {
        navigate(PATH_URL.home);
      }
      console.log(data.login);
    },
  });

  const onLogin = ({ email, password }: LoginMutationVariables) => {
    void loginMutation({
      variables: {
        email,
        password,
      },
    });
  };

  return (
    <div className="p-20 bg-[#f9f6f6]  flex justify-center">
      <div className="w-1/4 bg-white py-4 px-8 rounded-lg flex justify-center space-y-2 flex-col">
        <h1 className="text-center text-xl">ĐĂNG NHẬP</h1>
        <Text className="text-center pb-6 text-base">
          Nếu bạn chưa có tài khoản, đăng ký <Link to={PATH_URL.register}>tại đây</Link>
        </Text>
        <Form<LoginMutationVariables> onFinish={onLogin}>
          <Form.Item
            className="text-center"
            name="email"
            validateStatus="error"
            rules={[{ required: true, message: 'Please input your username' }]}
          >
            <Input bordered={false} className="px-3 py-2 bg-gray-100" placeholder="Email" />
          </Form.Item>
          <Form.Item
            className="text-center"
            name="password"
            validateStatus="error"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input bordered={false} className="px-3 py-2 bg-gray-100" placeholder="Mật khẩu" />
          </Form.Item>
          <div className="flex flex-col items-center space-y-2 text-center">
            <Button
              className="w-full bg-primary-green-color text-white"
              loading={loading}
              htmlType="submit"
              size="large"
            >
              Đăng nhập
            </Button>
            <a className="text-center">Quên mật khẩu?</a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
