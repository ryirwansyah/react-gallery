import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GalleryMap from './GalleryMap.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GalleryMap />, document.getElementById('root'));
registerServiceWorker();
