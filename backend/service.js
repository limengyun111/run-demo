var http = require('http');
var fs = require("fs");
var qs = require('querystring')

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = require('url');
function getUrlType(url) {
  const urlType = url.split('.')
  const len = urlType.length - 1;
  return urlType[len]
}
var server = http.createServer((req,res) => {

  const reqUrl = req.url;
  const urlSuffix = getUrlType(reqUrl);
  console.log('req.url', req.url, 'urlSuffix', urlSuffix)
  if(req.url === '/public/react-dom.development.js') {
    fs.readFile('../public/react-dom.development.js', (err, data) => {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.write(data.toString());
      res.end();
    })
  } else if(req.url === '/public/antd.css' || req.url === '/public/antd.css.map') {
    fs.readFile('../public/antd.css', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data.toString());
      res.end();
    })
  } else if(req.url === '/public/react.development.js') {
    fs.readFile('../public/react.development.js', (err, data) => {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.write(data.toString());
      res.end();
    })
  } else if(req.url === '/public/antd.js' || req.url === '/public/antd.js.map') {
    fs.readFile('../public/antd.js', (err, data) => {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.write(data.toString());
      res.end();
    })
  } else if(req.url === '/public/babel.min.js') {
    fs.readFile('../public/babel.min.js', (err, data) => {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.write(data.toString());
      res.end();
    })
  } else if(req.url === '/dist/bundle.js') {
  
    fs.readFile('../dist/bundle.js', (err, data) => {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.write(data.toString());
      res.end();
    })
  } else if(urlSuffix === 'css') {
    console.log('css')
   
    fs.readFile('../src/index.css', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data.toString())
      res.end()
    })
  } else if(urlSuffix === '/'){  
    console.log('/')
    fs.readFile('../src/index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      res.write(data.toString())
      res.end();
    })
  } 
  else if(req.url.startsWith('/iframe')){
    
    // console.log('rq----', req.url)
    var params = new URLSearchParams(req.url.split('?')[1]);
    res.end(`<html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>run-demo</title>
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.2/antd.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.3/antd.min.css">
      <style type="text/less">
      ${
        params.get("lessTextarea") !== 'undefined' ? params.get("lessTextarea"): ''
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
          return <div>
           ${
             params.get("htmlTextarea") !== 'undefined' ? params.get("htmlTextarea"): ''
           }
          </div>
        }
      }
      ReactDOM.render(<App />, document.getElementById('demo'))
     </script>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js"></script>
  </html>`);
  }
})
server.listen(9999, () => {
  '运行'
})