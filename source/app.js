// ENTRY.
import React from 'react';
import { render } from 'react-dom';

// style sheet
import './css/common.css';

// AppOverlay
import AppOverlay from './components/appOverlay/AppOverlay.react';
render(<AppOverlay />, document.getElementById('appOverlay'));

// Header
import Header from './components/header/Header.react';
render(<Header />, document.getElementById('header'));

// NewsBar
import NewsBar from './components/newsBar/NewsBar.react';

var contentId = document.getElementById('contentId').value;
var articleId = document.getElementById('articleId').value;
var uuid = document.getElementById('uuid').value;

render(<NewsBar contentId={contentId} articleId={articleId} uuid={uuid} />, document.getElementById('newsBar'));
