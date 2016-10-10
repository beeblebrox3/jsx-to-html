var React = require("react");
var ReactDOMServer = require("react-dom/server");
var html = require("html");
require("node-jsx").install();

var Div = require("./Div.jsx");

var factory = React.createFactory(Div);

console.log(
    html.prettyPrint(ReactDOMServer.renderToString(factory({})), {ident_size: 4})
);