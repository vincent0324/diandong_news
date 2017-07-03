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

// App.
import App from './components/app/App.react';
render(<App contentId={contentId} articleId={articleId} uuid={uuid}/>, document.getElementById('app'));

// Article
import Article from './js/Article';
let article = new Article();
