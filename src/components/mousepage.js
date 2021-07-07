import React from 'react'

import html2canvas from 'html2canvas';

export default class MouseTracker extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    adf() {
        html2canvas(document.getElementById('kl'), {
            allowTaint: false,
            useCORS: true,
        }).then(function (canvas) {
            // toImage
            const dataImg = new Image()
            dataImg.src = canvas.toDataURL('image/png')
            const alink = document.createElement("a");
            alink.href = dataImg.src;
            alink.download = "testImg.jpg";
            alink.click();
        });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
          <h1 id="kl">移动鼠标!</h1>
          <button onClick={() => this.adf()}>pic</button>
          <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
          <div className="box"></div>
        </div>
      );
    }
  }