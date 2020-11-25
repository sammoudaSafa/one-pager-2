import { CardList } from 'component/cardlist';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#coreContainer');

ReactDOM.render(<CardList />, document.getElementById('coreContainer'));
