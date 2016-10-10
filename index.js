var React = require("react");
var ReactDOMServer = require("react-dom/server");
require('node-jsx').install();

var Div = require("./Div.jsx");

var factory = React.createFactory(Div);

console.log(ReactDOMServer.renderToString(factory({})));
