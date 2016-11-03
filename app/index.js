import React from 'react';
import {render} from 'react-dom';

import router from './config/router'


render(
	router,
	document.getElementById('app')
)