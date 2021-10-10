import {Card, Col, Row} from "antd";

export default function SubscribesBlock(){
    return(
        <div className="subscribes-block" id="subscribes">
            <Row>
                <Col span={24} style={{marginTop:"45px"}}>
                    <span className="p1" style={{color:"white"}}>Подписки</span>
                    <span className="p2"  style={{color:"white"}}>системы</span><br/>
                    <span style={{color:"white"}}>В нашей системе предусмотрены разные виды подписок:</span>
                </Col>
            </Row>
            <Row justify="space-around" style={{marginTop:"85px"}} gutter={[0, 16]}>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{height:"350px"}}>
                    <Card hoverable={true} style={{width:"100%", height:"100%"}}>Бесплатная</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{height:"350px"}}>
                    <Card hoverable={true} style={{width:"100%", height:"100%"}}>Полная</Card>
                </Col>
                <Col xs={16} sm={16} md={6} lg={6} xl={6} style={{height:"350px"}}>
                    <Card hoverable={true} style={{width:"100%", height:"100%"}}>Семейная</Card>
                </Col>
            </Row>
        </div>
    )
}