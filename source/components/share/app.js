import React from 'react';
import {render} from 'react-dom';
import Share from './Share.react';

render(<Share shareState={true} hideShareBox={null}/>, document.getElementById('share'));
