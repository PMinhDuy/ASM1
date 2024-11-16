import { Button, Form, Input, Typography } from 'antd';
import { PATH_URL } from '#/shared/ultils/constant';
import { Link, useNavigate } from 'react-router-dom';
import { type CreateUserDto, useAddUserMutation } from '#/generated/schemas';

const { Text } = Typography;

function AddUserForm() {
  const navigate = useNavigate();
  const [addUserMutation, { loading }] = useAddUserMutation({
    onCompleted: (data) => {
      if (data.addUser.id) {
        navigate(PATH_URL.login);
      }
      console.log(data);
    },
  });

  const onAddUser = ({ email, password, name, avatar }: CreateUserDto) => {
    void addUserMutation({
      variables: {
        input: {
          email,
          password,
          name,
          avatar,
        },
      },
    });
  };

  return (
    <div className="p-20 bg-[#f9f6f6] flex justify-center">
      <div className="w-1/4 bg-white py-4 px-8 rounded-lg flex justify-center space-y-2 flex-col">
        <h1 className="text-center text-xl">ĐĂNG KÝ</h1>
        <Text className="text-center pb-6 text-base">
          Đã có tài khoản, đăng nhập <Link to={PATH_URL.login}>tại đây</Link>
        </Text>
        <Form<CreateUserDto> onFinish={onAddUser}>
          <Form.Item
            className="text-center"
            name="name"
            validateStatus="error"
            rules={[{ required: true, message: 'Please input your last name' }]}
          >
            <Input bordered={false} className="px-3 py-2 bg-gray-100" placeholder="Họ" />
          </Form.Item>
          <Form.Item
            className="text-center"
            name="email"
            validateStatus="error"
            rules={[{ required: true, message: 'Please input your email' }, { type: 'email' }]}
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
              htmlType="submit"
              loading={loading}
              size="large"
            >
              Đăng ký
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddUserForm;
