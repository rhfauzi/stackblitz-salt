import * as React from 'react';
import { Col, Row, Form, Input, Button, Checkbox, Spin, Modal } from 'antd';

import './style.css';

export default function App() {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = React.useState({
    remember: true,
    email: null,
    password: null
  })
  const [loading, setLoading] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };

  const onFinish = (values) => {
    setTimeout(() => {
      setModalOpen(true)
    }, 1000);
    
    setLoading(true)
    console.log("onFinish", values);
    localStorage.setItem("onSubmitData", JSON.stringify({values}));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSosmed = (event) => {
    console.log('Sosmed:', event);
  };

  return (
    <React.Fragment>
      <Row className="dashboard">
        <Col xs={24} lg={14} className="left-box">
          <div className="brief-text">
            <Row className="dashboard">
              <Col xs={24} xl={16}>
                <p className="lorem-text fcwhite">
                  Lorem ipsum dolor si
                  <br />
                  amet
                </p>
                <p className="lorem-text fcblack">consectetur</p>
                <p className="lorem-text-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={24} lg={10} className="right-box">
          <div className="login-container">
            <Spin spinning={loading}>
              <div className="title-box">
                <h1>Hello</h1>
                <h3>Enter your email and password to login.</h3>
              </div>
              <div className="form-box">
                <Form
                  form={form}
                  name="validateOnly"
                  layout="vertical"
                  initialValues={initialValues}
                  validateMessages={validateMessages}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="email"
                    rules={[{
                      type: 'email',
                      required: true,
                    }]}
                    label="Email"
                  >
                    <Input allowClear/>
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{
                      required: true,
                    }]}
                    label="Password"
                  >
                    <Input.Password allowClear/>
                  </Form.Item>

                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                      Forgot password?
                    </a>
                  </Form.Item>

                  <Form.Item className="footer-button">
                    <Button type="primary" className="login" htmlType="submit">
                      Login
                    </Button>
                    <Button className="signup">Sign Up</Button>
                  </Form.Item>
                </Form>

                <div className="sosmed-login">
                  <p>Or, login with</p>

                  <Row justify="space-between" align="bottom" gutter={10}>
                    <Col className="gutter-row" span={8}>
                      <Button onClick={() => handleSosmed("facebook")}>Facebook</Button>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Button onClick={() => handleSosmed("linkedIn")}>Linked in</Button>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <Button onClick={() => handleSosmed("google")}>Google</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Spin>
          </div>
        </Col>
      </Row>

      <Modal
        style={{
          top: 200,
        }}
        open={modalOpen}
        onOk={() => {
          setLoading(false)
          setModalOpen(false)
        }}
        footer={[
          <Button
            key="back"
            onClick={() => {
              setLoading(false)
              setModalOpen(false)
            }}
          >
            Ok
          </Button>
        ]}
      >
        Success Login
      </Modal>
    </React.Fragment>
  );
}
