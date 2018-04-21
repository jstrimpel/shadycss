import {parse} from '../src/css-parse.js';
import StyleTransformer from '../src/style-transformer.js';

self.onmessage = function (e) {
	const {style, name} = e.data;
  const info = {
    is: name,
    extends: null,
    __cssBuild: '',
  };
  const ast = parse(style);
  const scopedStyle = StyleTransformer.elementStyles(info, ast);
  const message = {};
  message['style'] = scopedStyle;
	message['ast'] = ast;
	message['name'] = name;

	self.postMessage(message);
};
