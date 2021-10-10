import {Button, Card, Col, Row} from "antd";
import {useState} from "react";
import ModalSubscribe from "../../components/ModalSubscribe";

export default function PossibilitiesBlock() {
    const [visibleModalSubscribe, setVisibleModalSubscribe] = useState(false)
    return (
        <div className="possibilities-block" id="possibilities">
            <Row style={{marginTop:"45px"}}>
                <Col span={24}>
                    <span className="p1">Возможности</span><span className="p2">системы</span><br/>
                    <span>Все благодаря многочисленным функциям и настройкам. Вот некоторые из них:</span>
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop:"85px"}} gutter={[0, 16]}>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{height:"350px"}}>
                    <Card hoverable={true} style={{width:"100%", height:"100%"}}>Content</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{height:"350px"}}>
                    <Card hoverable={true} style={{width:"100%", height:"100%"}}>Content</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{height:"350px"}}>
                    <Card hoverable={true} style={{width:"100%", height:"100%"}}>Content</Card>
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop:"45px"}}>
                <Col xs={16} sm={16} md={20} lg={20} xl={20}>
                    <Button className="button-block" onClick={() => {setVisibleModalSubscribe(true)}} block>Получить бесплатную версию</Button>
                    <ModalSubscribe visible={visibleModalSubscribe} onCancel={() => {setVisibleModalSubscribe(false);}}/>
                </Col>
            </Row>
        </div>
    )
}