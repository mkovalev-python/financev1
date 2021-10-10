import {Button, Form, Input, Modal} from "antd";

export default function ModalSubscribe({visible, onCancel}) {
    return (
        <Modal
            centered
            title="Получение доступа в систему"
            visible={visible}
            onCancel={onCancel}
            footer={null}>
            <Form>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Пожалуйста, введите электронную почту!' },
                        {type: 'email', message: 'Некоррекно введен E-mail!',}]}>
                    <Input placeholder="Пожалуйста, введите E-mail"/>
                </Form.Item>
                <Form.Item>
                    <Button className="button-block" htmlType="submit">
                        Отправить пароль
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
)
}