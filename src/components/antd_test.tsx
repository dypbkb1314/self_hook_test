import React,{ useState } from 'react'
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

// import React, { Component } from 'react'; 
  
// export default class AntdTest extends Component { 
  
//   constructor(props:any){
//     super(props);
//     this.state={
//       error: false
//     }
//   }
  
//   static getDerivedStateFromError(error) { 
//     console.log('error',error)
//     // Changing the state to true if some error occurs 
//     return { 
//       error:true, 
//     }; 
//   } 
  
//   render() { 
//     console.log(1)
//     return ( 
//       <React.StrictMode> 
//         <div> 
//           {this.state.error ? <div>Some error</div>:<GFGComponent />} 
//         </div> 
//       </React.StrictMode> 
//     ); 
//   } 
// } 
  
// class GFGComponent extends Component { 
//   constructor(props){
//     super(props);
//     this.state={
//       heading: 'title'
//     }
//   }
//   // GFGComponent throws error as state of GFGCompnonent is not defined 
//   render() { 
//     console.log(this.state)
//     return <h1>{this.state.heading}</h1>; 
//   } 
// }