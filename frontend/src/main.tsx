import { CardList } from 'component/cardlist';
import { Footer } from 'component/footer';
import { Nav } from 'component/nav';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


Modal.setAppElement('#coreContainer');

ReactDOM.render(<>
    <Nav />
    <CardList />
    <Footer />
</>, document.getElementById('coreContainer'));
