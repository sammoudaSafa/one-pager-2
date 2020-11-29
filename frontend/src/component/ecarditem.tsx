import { CardModel } from 'common';
import React from 'react';

interface Props { card: CardModel; }

interface State {
    title: string;
    excerpt: string;
    date?: Date;
    link: string;
    featured_media: string;
}

export class ECardItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { title: props.card.title, excerpt: props.card.excerpt, date: props.card.date, link: props.card.link, featured_media: props.card.featured_media };
    }

    public render() {
        const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };

        return <article className='article'>
            <span> {this.props.card.date.toLocaleDateString(undefined /* 'fr-ca' */, dateFormat)}</span>
            <h2 className='heading-secondary u-margin-top-small u-margin-bottom-small'> {this.props.card.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: this.props.card.excerpt.rendered }} />
            <button className='btn'><a href={this.props.card.link}>Lire la suite</a></button>
        </article>
            ;
    }

}
