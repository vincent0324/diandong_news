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
render(<NewsBar />, document.getElementById('newsBar'));