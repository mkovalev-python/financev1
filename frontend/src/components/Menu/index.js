import {Col, Layout, Row} from "antd";
import Scrollspy from "react-scrollspy"
import {NavHashLink} from "react-router-hash-link"

const {Header} = Layout
export default function Menu() {
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <Header className="header">
            <Row>
                <Col
                    xs={21}
                    sm={22}
                    md={22}
                    lg={{span: 9, offset: 12}}
                    xl={{span: 8, offset: 14}}>
                    <Scrollspy
                        items={["section-1", "section-2"]}
                        currentClassName="is-current"
                        offset={-55}>
                        <NavHashLink
                            to="/#home"
                            smooth
                            className="home-menu">
                            Главная
                        </NavHashLink>
                        <NavHashLink
                            to="/#possibilities"
                            scroll={(el) => scrollWithOffset(el, 55)}
                            smooth
                            className="home-menu">
                            Возможности
                        </NavHashLink>
                        <NavHashLink
                            to="/#subscribes"
                            smooth
                            className="home-menu">
                            Подписки
                        </NavHashLink>
                        <NavHashLink
                            to="/#login"
                            smooth
                            className="home-menu"
                            style={{color:"#ffffff", fontWeight:500}}>
                            Войти
                        </NavHashLink>
                    </Scrollspy>
                </Col>
            </Row>
        </Header>
    )
}