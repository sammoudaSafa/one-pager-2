import { CardModel } from 'common';
import React from 'react';

interface Props { card: CardModel; }

interface State {
    title: string;
    content: string;
    date?: Date;
    link: string;
}

export class ECardItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { title: props.card.title, content: props.card.content, date: props.card.date, link: props.card.link };
    }

    public render() {
        const dateFormat = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

        return <article className='article'>
            <span> {this.props.card.date.toLocaleDateString(undefined /* 'fr-ca' */, dateFormat)}</span>
            <h2 className='heading-secondary u-margin-top-small u-margin-bottom-small'> {this.props.card.title.rendered}</h2>
            <p>{this.props.card.content.rendered}</p>
            <button className='btn'><a href={this.props.card.link}>Lire la suite</a></button>
        </article>
            ;
    }

}
