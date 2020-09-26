import React from 'react';
import { Input, Button } from 'antd';
import './App.css';

const { TextArea } = Input;
class App extends React.Component {
  state = {
    htmlTextarea: undefined,
    cssTextarea: undefined,
    jsTextarea: undefined,

  }
  componentDidUpdate = () => {
    const iframeEl = document.getElementById('demo-iframe')
    iframeEl.src = iframeEl.src

  }
  runDemo = () => {
    console.log(111)
    const iframeEl = document.getElementById('demo-iframe')
  
    const lessTextarea = document.getElementById('less-textarea')
    const htmlTextarea = document.getElementById('html-textarea')
    const jsTextarea = document.getElementById('js-textarea')
  
    this.setState({
      lessTextarea: lessTextarea.value,
      htmlTextarea: htmlTextarea.value,
      jsTextarea: jsTextarea.value,
    })
}

  render() {
    console.log('this.state.cssTextarea', this.state.cssTextarea, this.state.htmlTextarea)
    return (
      <div className="wrap">
        <div>
          <Button>html</Button>
          <Button className="run-demo-but" onClick={() => this.runDemo()}>运行</Button>
          <TextArea className="textarea-width" id="html-textarea" />
        </div>
        <div>
          <Button>less</Button>
          <TextArea className="textarea-width" id="less-textarea" />
        </div>
        <div>
          <Button>js</Button>
          <TextArea className="textarea-width" id="js-textarea" />
        </div>
        <div>
          <iframe
          src={`http://localhost:9999/iframe?htmlTextarea=${this.state.htmlTextarea}&lessTextarea=${this.state.lessTextarea}&jsTextarea=${this.state.jsTextarea}`}
          frameborder="0"
          id="demo-iframe"
          style={{minHeight: "100vh"}}
          ></iframe>
        </div>
      </div>
    )
  }
}
export default App;
