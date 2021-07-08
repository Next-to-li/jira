import React, { FormEvent } from "react";
import { cleanObject } from "utils";
import { useAuth } from "context/auth-context";

import { Button, Form, Input } from "antd";
import { LongButton } from "unauthenticated-app";

// interface Base {
//   id: number
// }
//
// interface Advance extends Base {
//   name: string
// }
//
// const test = (p: Base) => {
// }
//
// // 鸭子类型(duck typing)：面向接口编程 而不是 面向对象编程
// const a = {id: 1, name: 'jack'}
// test(a)
// const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const { login } = useAuth();

  // HTMLFormElement extends Element
  const handleSubmit = (values: { username: string; password: string }) => {
    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    // .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    // .value;
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        key={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        {/* <label htmlFor="username">用户名</label> */}
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        key={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        {/* <label htmlFor="password">密码</label> */}
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item key={"denglu"}>
        <LongButton htmlType={"submit"} type={"primary"}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
