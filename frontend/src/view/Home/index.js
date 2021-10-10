import HomeBlock from "./HomeBlock";
import PossibilitiesBlock from "./PossibilitiesBlock";
import SubscribesBlock from "./SubscribesBlock";
import LoginBlock from "./LoginBlock";
import {Footer} from "antd/es/layout/layout";
import logo from "../../resources/img/logo.png";
import {Col, Row} from "antd";

export default function Home(){
    return(
        <>
            <section id="section-1">
                <HomeBlock />
            </section>
            <section id="section-2">
                <PossibilitiesBlock />
            </section>
            <section id="section-3">
                <SubscribesBlock />
            </section>
            <section id="section-4">
                <LoginBlock />
            </section>
            <Footer>
                <Row justify="space-around">
                    <Col span={24}>
                        <img style={{width:"120px",display: "block", marginLeft: "auto", marginRight: "auto"}} src={logo} alt="logo"/>
                        <p style={{textAlign:"center"}}>© 2021 Финансовый аналитик </p>
                    </Col>
                </Row>
            </Footer>
        </>
    )
}