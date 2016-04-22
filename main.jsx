"use strict";

import Http from 'http';
import React from 'react';
import Jade from 'jade';
import {ListElements as MyList} from './components/list.jsx';
import ReactDomServer from 'react-dom/server';

const server = Http.createServer();

server.on('request', (req, res) => {
  let list = ReactDomServer.renderToString(<MyList name="Hello React" />);
  let compile = Jade.compileFile('./templates/index.jade', { pretty: true });

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(compile({ list: list }));
  res.end();
});

server.listen(8080, 'localhost');

console.log('server running at http://localhost:8080');
