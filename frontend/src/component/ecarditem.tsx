import { CardModel } from 'common';
import React from 'react';


interface Props { card: CardModel; }
interface State {
    title: string;
    content: string;
    publicationDate?: Date;
}

export class ECardItem extends React.Component<Props, State> {
    // private api = new Api;

    constructor(props: Props) {
        super(props);

        this.state = { title: props.card.title, content: props.card.content };
    }


    public render() {
        return <div>
            <h1>helloo{this.state.title.rendred}</h1>
            <h2>this is message{this.state.content.rendred}</h2>
        </div>;
    }

}
