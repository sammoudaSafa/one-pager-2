import { Api } from 'api';
import { CardModel } from 'common';
import React from 'react';
import { ECardItem } from './ecarditem';


interface Props { }
interface State {
    cards?: CardModel[];
    title?: string;
    content?: string;
    publicationDate?: Date;
}

export class CardListOne extends React.Component<Props, State> {
    private api = new Api;

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    public async componentDidMount() {
        const cards = (await this.api.getJson('/posts') as any[]).map(CardModel.fromJSON);
        this.setState({ cards });
    }

    public render() {
        const { cards } = this.state;
        if (!cards) { return 'Chargement des nouvelles...'; }

        // const dateFormat = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return <>
            <main className='main u-margin-top-big container'>
                <section className='main-content flex'>
                    {cards.map(card =>
                        <ECardItem key={card.cardId} card={card} />)}
                </section>
            </main>
        </>;
    }
}
