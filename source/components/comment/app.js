import React from 'react';
import {render} from 'react-dom';
import Comment from './Comment.react';

let contentId = document.getElementById('contentId').value;
let articleId = document.getElementById('articleId').value;
let uuid = document.getElementById('uuid').value;

render(<Comment uuid={articleId}/>, document.getElementById('comment'));
