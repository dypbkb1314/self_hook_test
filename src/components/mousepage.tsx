import React from 'react'

import html2canvas from 'html2canvas';
import { MemoryRouterProps } from 'react-router';

interface MyProps{
  
}

interface MyState{
  x: number,
  y: number
}

export default class MouseTracker extends React.Component<{},MyState> {
    constructor(props:any) {
      super(props);
      this.state = { x: 0, y: 0 };
    }

    adf() {
      const portalDiv = document.getElementById('jk');
      if(portalDiv){
        html2canvas(portalDiv, {
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
    }
  
    render() {
      return (
        <div id='jk' style={{ height: '100vh' }} onMouseMove={(event) => this.setState({x: event.clientX,y: event.clientY})}>
          <h1 id="kl">移动鼠标!</h1>
          <button onClick={() => this.adf()}>pic</button>
          <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
          <div className="box"></div>
        </div>
      );
    }
  }