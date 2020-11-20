import React from 'react';
import ReactDOM from 'react-dom';
import { CardList } from 'view/cardlist';
import { Nav } from 'view/nav';


ReactDOM.render(<><Nav /><CardList /> </>, document.getElementById('coreContainer'));
