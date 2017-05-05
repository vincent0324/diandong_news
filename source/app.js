// ENTRY.
import React from 'react';
import { render } from 'react-dom';

let contentId = document.getElementById('contentId').value;
let articleId = document.getElementById('articleId').value;
let uuid = document.getElementById('uuid').value;

// style sheet
import './css/common.css';
import './css/article.css';

// AppOverlay
import AppOverlay from './components/appOverlay/AppOverlay.react';
render(<AppOverlay />, document.getElementById('appOverlay'));

// Header
import Header from './components/header/Header.react';
render(<Header />, document.getElementById('header'));

// interaction.
import Like from './components/like/Like.react';
render(<Like articleId={articleId}/>, document.getElementById('article-interaction-like'));
import Share from './components/share/Share.react';
render(<Share/>, document.getElementById('article-interaction-share'));

// comment
import Comment from './components/comment/Comment.react';
render(<Comment uuid={articleId}/>, document.getElementById('comment'));

// NewsBar
import NewsBar from './components/newsBar/NewsBar.react';
render(<NewsBar contentId={contentId} articleId={articleId} uuid={uuid} />, document.getElementById('newsBar'));
