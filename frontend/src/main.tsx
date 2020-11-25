import { CardList } from 'component/cardlist';
import { Nav } from 'component/nav';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#coreContainer');

ReactDOM.render(<>
    <Nav />
    <CardList />
</>, document.getElementById('coreContainer'));
