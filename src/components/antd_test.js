import { useState } from 'react'
import { Row, Col, Button, Modal } from 'antd';

function AntdTest() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <div>
            <Row>
                <Col span={24}>col</Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
            </Row>
            <Row>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>
            <Button type="primary">Primary Button</Button>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default AntdTest;