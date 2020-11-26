import { CardModel } from 'common';
import React from 'react';

interface Props { card: CardModel; }

interface State {
    title: string;
    content: string;
    publicationDate?: Date;
}

export class ECardItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { title: props.card.title, content: props.card.content };
    }

    public render() {
        return <article className='article'>
            <h2 className='heading-secondary u-margin-top-small u-margin-bottom-small'> {this.props.card.title.rendered}</h2>
            <p>{this.props.card.content.rendered}</p>
            <a href='#' className='btn'>Lire la suite</a>
        </article>
            ;
    }

}
