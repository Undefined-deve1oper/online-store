import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import { Context } from "../../index";

const Shop = observer(() => {
    const { device } = useContext(Context);
    console.log(device);

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
