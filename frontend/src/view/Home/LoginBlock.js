import {Button, Col, Form, Input, Row} from "antd";

export default function LoginBlock() {
    return (
        <div className="login-block" id="login">
            <Row>
                <Col span={24} style={{marginTop: "45px"}}>
                    <span className="p1">Авторизоваться</span>
                    <span className="p2"> в системе</span><br/>
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop: "55px"}}>
                <Col xs={20} sm={16} md={12} lg={10} xl={10}>
                    <Form
                        name="basic"
                        initialValues={{remember: true}}
                        autoComplete="off"

                    >
                        <Form.Item
                            name="username"
                            rules={[{required: true, message: 'Пожалуйста, введите логин!'}]}
                        >
                            <Input placeholder="Введите логин"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Пожалуйста, введите пароль!'}]}
                        >
                            <Input.Password placeholder="Введите пароль"/>
                        </Form.Item>
                        <Form.Item>
                            <Button className="button-block" block htmlType="submit">
                                Авторизоваться
                            </Button>
                        </Form.Item>
                        <Button type="link">Забыли пароль?</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}