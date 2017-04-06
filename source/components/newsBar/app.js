import React from 'react';
import { render } from 'react-dom';
import NewsBar from './NewsBar.react.js';

var contentId = document.getElementById('contentId').value;
var articleId = document.getElementById('articleId').value;
var uuid = document.getElementById('uuid').value;

render(<NewsBar contentId={contentId} articleId={articleId} uuid={uuid} />, document.getElementById('newsBar'));
