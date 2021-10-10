import {Button, Col, Row} from "antd";
import logo from "../../resources/img/logo.png"
import {useState} from "react";
import ModalSubscribe from "../../components/ModalSubscribe";
import { DownOutlined } from '@ant-design/icons';

export default function HomeBlock() {
    const [visibleModalSubscribe, setVisibleModalSubscribe] = useState(false)
    return (
        <div className='home-block' id="home">
            <Row>
                <Col xs={0} sm={0} md={0} lg={12} xl={12} className='home-block left'>
                    <img className='home-block-left-logo' src={logo} alt="logo"/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} className='home-block right'>
                    <Row className='description'>
                        <Col xs={{span: 20, offset: 2}}
                             sm={{span: 20, offset: 2}}
                             md={{span: 12, offset: 4}}
                             lg={{span: 12, offset: 4}}
                             xl={{span: 12, offset: 4}}
                             xxl={{span: 12, offset: 4}}>
                            <h2>Правильные<br/> финансовые решения<br/> каждый день</h2>
                            <p>Приложение, которое заботится о вашем бюджете. Более 500 000 пользователей уже с нами.
                                Присоединяйтесь, это бесплатно!</p>
                            <Button onClick={() => {setVisibleModalSubscribe(true)}} style={{width: "100%", marginTop: "5%"}}>Попробовать</Button>
                            <ModalSubscribe visible={visibleModalSubscribe} onCancel={() => {setVisibleModalSubscribe(false);}}/>
                        </Col>
                    </Row>
                </Col>
                <div className="divArrow">
                <DownOutlined className="arrowDown"/>
                </div>
            </Row>

        </div>
    )
}