import { CardModel } from 'common';
import React from 'react';

interface Props { card: CardModel; }

interface State {
    title: string;
    content: string;
    date?: Date;
}

export class ECardItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { title: props.card.title, content: props.card.content, date: props.card.date };
    }

    public render() {
        const dateFormat = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

        return <article className='article'>
            <h2 className='heading-secondary u-margin-top-small u-margin-bottom-small'> {this.props.card.title.rendered}</h2>
            <p>{this.props.card.content.rendered}</p>
            <h3>Date: {this.props.card.date.toLocaleDateString(undefined /* 'fr-ca' */, dateFormat)}</h3>
            <button className='btn' onClick={ }><a href='#'>Lire la suite</a></button>
        </article>
            ;
    }

}
