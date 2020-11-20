import React from 'react';
import { CardItem } from '../model/carditem';

interface Props { card: CardItem; }

interface State { }

export class EditCardItem extends React.Component<Props, State> {

    public render() {
        return <li className='card'>
            <h1>
                {this.props.card.title}</h1>
        </li>;
    }

}
