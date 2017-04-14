import React from 'react';
import {render} from 'react-dom';
import Like from './Like.react';

let contentId = document.getElementById('contentId').value;
let articleId = document.getElementById('articleId').value;
let uuid = document.getElementById('uuid').value;

render(<Like articleId={articleId}/>, document.getElementById('like'));
