import React from 'react';
import {render} from 'react-dom';
import ShareOverlay from './ShareOverlay.react';

render(<ShareOverlay shareState={true} hideShareBox={null}/>, document.getElementById('share-overlay'));
