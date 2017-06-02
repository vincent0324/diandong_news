import React from 'react';
import {render} from 'react-dom';
import App from './App.react';

let contentId = document.getElementById('contentId').value;
let articleId = document.getElementById('articleId').value;
let uuid = document.getElementById('uuid').value;

render(<App contentId={contentId} articleId={articleId} uuid={uuid}/>, document.getElementById('app'));
