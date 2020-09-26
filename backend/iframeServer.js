var http = require('http');
var fs = require("fs");
var qs = require('querystring')
var server = http.createServer((req,res) => {
  console.log('rq----', req.url.split('?')[1])
  var params = new URLSearchParams(req.url.split('?')[1]);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log('params',params)
    res.end(`<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>run-demo</title>
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.2/antd.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js"></script>
      <link rel="stylesheet/less" type="text/css" href="styles.less" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.2/antd.min.css" />
      <style>
      ${
        params.get("cssTextarea")
      }
     </style>
    </head>
    <body>
      <div id="demo">
      
      </div>
      <script type="application/javascript">
      ${
        params.get("jsTextarea")
      }
     </script>
     <script type="text/babel">
      class App extends React.Component {
        render() {
          return <div>${
            params.get("htmlTextarea")
          }</div>
        }
      }
      ReactDOM.render(<App />, document.getElementById('demo'))
   </script>
    </body>
  </html>`);
  // res.end();
  // }
  // )
})
server.listen(8999, () => {
  '运行'
})
