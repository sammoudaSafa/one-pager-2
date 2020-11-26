import { CardListOne } from 'component/cardlistone';
import { Footer } from 'component/footer';
import { Nav } from 'component/nav';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


Modal.setAppElement('#coreContainer');

ReactDOM.render(<>
    <Nav />
    <CardListOne />
    <Footer />
</>, document.getElementById('coreContainer'));
