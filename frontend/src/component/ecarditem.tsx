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
        return <li>
            <h1>
                {this.props.card.title.rendered}</h1>
            <h3>{this.props.card.content.rendered}</h3>
        </li>;
    }

}
