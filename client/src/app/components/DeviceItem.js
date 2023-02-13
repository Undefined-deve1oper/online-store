import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { fetchOneBrand } from "../http/deviceAPI";

const DeviceItem = ({ device }) => {
    const history = useHistory();
    const [brand, setBrand] = useState("Loading...");

    useEffect(() => {
        fetchOneBrand(device.brandId).then((data) => setBrand(data.name));
    }, []);

    const goToDevice = () => {
        history.push(DEVICE_ROUTE + "/" + device.id);
    };

    return (
        <Col md={3} className={"mt-3"} onClick={goToDevice}>
            <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
                <Image
                    width={150}
                    height={150}
                    src={process.env.REACT_APP_API_URL + device.img}
                />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{brand}</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
